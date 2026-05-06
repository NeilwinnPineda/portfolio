import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import imageFiles from '../../content/portfolio-images.json';
import content from '../../content/content.json';

const PAGE_SIZE = 16;
const FEATURED_REVERT_DELAY_MS = 3000;
const FULL_IMAGE_DIR = 'assets/images/portfolio/';
const THUMB_IMAGE_DIR = 'assets/images/portfolio/thumbs/';

interface PortfolioItem {
  fullSrc: string | null;
  thumbSrc: string | null;
  index: number;
  featured: boolean;
  col: number;
  row: number;
}

interface BorrowedPortfolioItem extends PortfolioItem {
  fillCol: number;
  targetRow: number;
  gridColumn: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements AfterViewInit, OnDestroy {
  readonly content = content;

  activeCert = signal<number | null>(null);
  toggleCert(i: number) { this.activeCert.update(v => v === i ? null : i); }

  private all: string[];
  private revision = signal(0);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private featuredRevertDelay: ReturnType<typeof setTimeout> | null = null;
  private resizeObs?: ResizeObserver;
  private resizeDebounce: ReturnType<typeof setTimeout> | null = null;
  private el = inject(ElementRef<HTMLElement>);
  private zone = inject(NgZone);
  private resizeTick = signal(0);

  page     = signal(0);
  featured = signal<number | null>(null);
  hovered  = signal<number | null>(null);
  fullLoaded = signal<Record<number, boolean>>({});

  pageItems = computed(() => {
    this.revision();
    return this.all.slice(this.page() * PAGE_SIZE, (this.page() + 1) * PAGE_SIZE);
  });

  slotItems = computed<(string | null)[]>(() => {
    const current = this.pageItems();
    return Array.from({ length: PAGE_SIZE }, (_, index) => current[index] ?? null);
  });

  displayItems = computed(() => {
    return this.slotItems().map((src, index) => ({
      fullSrc: src ? `${FULL_IMAGE_DIR}${encodeURIComponent(src)}` : null,
      thumbSrc: src ? `${THUMB_IMAGE_DIR}${encodeURIComponent(src)}` : null,
      index,
      featured: index === this.featured(),
      col: (index % 4) + 1,
      row: Math.floor(index / 4)
    }));
  });

  featuredItem = computed(() => {
    const featured = this.featured();
    if (featured === null) return null;
    const item = this.displayItems()[featured];
    return item?.fullSrc ? item : null;
  });

  borrowedTiles = computed<BorrowedPortfolioItem[]>(() => {
    const featured = this.featuredItem();
    if (!featured) return [];

    const fillCols = [1, 2, 3, 4].filter(col => col !== featured.col);
    const candidates = this.borrowCandidates(featured);

    return fillCols
      .map((fillCol, position) => {
        const item = candidates[position];
        if (!item?.fullSrc) return null;

        return {
          ...item,
          fillCol,
          targetRow: featured.row,
          gridColumn: this.featuredGapColumn(featured.col, fillCol)
        };
      })
      .filter((item): item is BorrowedPortfolioItem => item !== null);
  });

  borrowedIndices = computed(() =>
    new Set(this.borrowedTiles().map(item => item.index))
  );

  certRows = computed(() => {
    this.resizeTick();
    const certs = content.certificates;
    return Array.from({ length: Math.ceil(certs.length / 2) }, (_, i) => ({
      certs: certs.slice(i * 2, i * 2 + 2),
      edgeStyle: `--cert-s:${(0.5 + Math.random() * 5).toFixed(2)}rem;--cert-e:${(0.5 + Math.random() * 5).toFixed(2)}rem`
    }));
  });

  private edgeWidths = computed(() => {
    this.page();
    this.resizeTick();
    return Array.from({ length: 4 }, () => ({
      s: (0.5 + Math.random() * 5).toFixed(2),
      e: (0.5 + Math.random() * 5).toFixed(2)
    }));
  });

  rows = computed(() =>
    Array.from({ length: 4 }, (_, rowIndex) => {
      const ew = this.edgeWidths()[rowIndex];
      return {
        rowIndex,
        items: this.displayItems().slice(rowIndex * 4, rowIndex * 4 + 4),
        edgeStyle: `--edge-start-w:${ew.s}rem;--edge-end-w:${ew.e}rem`
      };
    })
  );

  totalPages = computed(() => Math.ceil(this.all.length / PAGE_SIZE));

  pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i)
  );

  constructor() {
    this.all = [...imageFiles]
      .sort((a, b) => this.compareImageNames(a, b));
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.resizeObs = new ResizeObserver(() => {
      if (this.resizeDebounce) clearTimeout(this.resizeDebounce);
      this.resizeDebounce = setTimeout(() =>
        this.zone.run(() => this.resizeTick.update(v => v + 1))
      , 1200);
    });
    this.el.nativeElement.querySelectorAll('.portfolio-row, .cert-row')
      .forEach((el: Element) => this.resizeObs!.observe(el));
  }

  ngOnDestroy() {
    this.resizeObs?.disconnect();
    if (this.resizeDebounce) clearTimeout(this.resizeDebounce);
  }

  toggle(i: number) {
    if (!this.slotItems()[i]) return;
    this.clearFeaturedRevertDelay();
    const next = this.featured() === i ? null : i;
    if (next !== null) this.ensureFullImage(next);
    this.featured.set(next);
  }

  setHovered(i: number | null) {
    const featured = this.featured();
    if (featured !== null && i !== featured) {
      this.hovered.set(null);
      return;
    }

    if (i !== null && featured !== null && i === featured) {
      this.clearFeaturedRevertDelay();
    }

    this.hovered.set(i);
  }

  leaveCard(i: number) {
    if (this.featured() === i) {
      this.scheduleFeaturedRevertDelay(i);
    }
    if (this.hovered() === i) {
      this.hovered.set(null);
    }
  }

  goTo(p: number) {
    this.page.set(p);
    this.featured.set(null);
    this.hovered.set(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prev() { if (this.page() > 0) this.goTo(this.page() - 1); }
  next() { if (this.page() < this.totalPages() - 1) this.goTo(this.page() + 1); }

  onError(i: number) {
    if (!this.slotItems()[i]) return;
    const globalIndex = this.page() * PAGE_SIZE + i;
    this.all.splice(globalIndex, 1);
    if (this.featured() === i) this.featured.set(null);
    if (this.hovered() === i) this.hovered.set(null);
    this.revision.update(v => v + 1);
  }

  currentImageSrc(item: PortfolioItem): string | null {
    if (!item.fullSrc || !item.thumbSrc) return item.fullSrc ?? item.thumbSrc;
    if (item.featured && this.fullLoaded()[item.index]) return item.fullSrc;
    return item.thumbSrc;
  }

  borrowedItemsForRow(rowIndex: number): BorrowedPortfolioItem[] {
    return this.borrowedTiles().filter(item => item.targetRow === rowIndex);
  }

  onImageLoad(index: number, src: string | null) {
    if (!src || !src.includes('/thumbs/')) {
      this.fullLoaded.update(state => ({ ...state, [index]: true }));
    }
  }

  private ensureFullImage(index: number) {
    if (!this.isBrowser || this.fullLoaded()[index]) return;

    const filename = this.slotItems()[index];
    if (!filename) return;

    const src = `${FULL_IMAGE_DIR}${encodeURIComponent(filename)}`;
    const img = new Image();
    img.onload = () => {
      this.fullLoaded.update(state => ({ ...state, [index]: true }));
    };
    img.src = src;
  }

  private compareImageNames(a: string, b: string): number {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  }

  private scheduleFeaturedRevertDelay(index: number) {
    this.clearFeaturedRevertDelay();
    this.featuredRevertDelay = setTimeout(() => {
      if (this.featured() === index) {
        this.featured.set(null);
      }
      this.featuredRevertDelay = null;
    }, FEATURED_REVERT_DELAY_MS);
  }

  private clearFeaturedRevertDelay() {
    if (!this.featuredRevertDelay) return;
    clearTimeout(this.featuredRevertDelay);
    this.featuredRevertDelay = null;
  }

  private borrowCandidates(featured: PortfolioItem): PortfolioItem[] {
    const items = this.displayItems().filter(item =>
      item.fullSrc &&
      item.index !== featured.index &&
      item.row !== featured.row
    );

    return items.sort((a, b) => {
      const aBelow = a.row > featured.row ? 0 : 1;
      const bBelow = b.row > featured.row ? 0 : 1;
      if (aBelow !== bBelow) return aBelow - bBelow;

      const rowDistance = Math.abs(a.row - featured.row) - Math.abs(b.row - featured.row);
      if (rowDistance !== 0) return rowDistance;

      return a.index - b.index;
    });
  }

  private featuredGapColumn(featuredCol: number, fillCol: number): string {
    const columns: Record<number, Record<number, string>> = {
      1: { 2: '14 / 18', 3: '18 / 22', 4: '22 / 26' },
      2: { 1: '2 / 6', 3: '18 / 22', 4: '22 / 26' },
      3: { 1: '2 / 6', 2: '6 / 10', 4: '22 / 26' },
      4: { 1: '2 / 6', 2: '6 / 10', 3: '10 / 14' }
    };

    return columns[featuredCol]?.[fillCol] ?? '';
  }
}
