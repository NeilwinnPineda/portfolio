import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { Home } from '../home/home';
import { Portfolio } from '../portfolio/portfolio';
import { Scene } from '../scene/scene';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { ActiveSectionService } from '../../services/active-section.service';

@Component({
  selector: 'app-shell',
  imports: [Home, Portfolio, Scene, About, Contact],
  templateUrl: './shell.html',
  styleUrl: './shell.css'
})
export class Shell implements AfterViewInit, OnDestroy {
  private host = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private sectionSvc = inject(ActiveSectionService);
  private observer?: IntersectionObserver;
  private observedSections: HTMLElement[] = [];
  private onScrollRef = () => this.requestSync();
  private onResizeRef = () => this.requestSync();
  private rafId: number | null = null;
  private labCenterTimeout: ReturnType<typeof setTimeout> | null = null;
  readonly labLoaded = signal(false);
  readonly visibleSections = signal<Record<string, boolean>>({});

  readonly activeSection = this.sectionSvc.active;
  loadLab() {
    this.labLoaded.set(true);
    if (isPlatformBrowser(this.platformId)) {
      this.labCenterTimeout = setTimeout(() => this.centerLabSection(), 120);
    }
  }
  unloadLab() { this.labLoaded.set(false); }
  isVisible(id: string) { return !!this.visibleSections()[id]; }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = Array.from(
      this.host.nativeElement.querySelectorAll('[data-spy-section]')
    ) as HTMLElement[];
    this.observedSections = sections;

    this.observer = new IntersectionObserver(entries => {
      this.visibleSections.update(state => {
        const next = { ...state };
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (!id) continue;
          next[id] = entry.isIntersecting;
        }
        return next;
      });
      this.requestSync();
    }, {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: [0.1, 0.2, 0.35, 0.5, 0.7]
    });

    sections.forEach(section => this.observer?.observe(section));
    window.addEventListener('scroll', this.onScrollRef, { passive: true });
    window.addEventListener('resize', this.onResizeRef, { passive: true });
    this.syncActiveFromViewport();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.onScrollRef);
    window.removeEventListener('resize', this.onResizeRef);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    if (this.labCenterTimeout) clearTimeout(this.labCenterTimeout);
  }

  private requestSync() {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.syncActiveFromViewport();
    });
  }

  private syncActiveFromViewport() {
    if (!this.observedSections.length) return;

    const navOffset = 100;
    const markerY = window.scrollY + navOffset + window.innerHeight * 0.28;
    let activeId = this.sectionSvc.active();
    const visibility: Record<string, boolean> = {};
    const firstSection = this.observedSections[0];
    const lastSection = this.observedSections[this.observedSections.length - 1];
    let foundActiveBand = false;

    for (const section of this.observedSections) {
      const rect = section.getBoundingClientRect();
      const inView = rect.bottom > (navOffset + 20) && rect.top < window.innerHeight * 0.92;
      visibility[section.id] = inView;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (markerY >= top && markerY < bottom) {
        activeId = section.id;
        foundActiveBand = true;
      }
    }

    if (!foundActiveBand) {
      if (markerY < firstSection.offsetTop) activeId = firstSection.id;
      if (markerY >= lastSection.offsetTop) activeId = lastSection.id;
    }

    this.visibleSections.set(visibility);
    this.sectionSvc.active.set(activeId);
  }

  private centerLabSection() {
    const section = this.host.nativeElement.querySelector('#lab') as HTMLElement | null;
    const scene = this.host.nativeElement.querySelector('.lab-scene-shell') as HTMLElement | null;
    if (!section || !scene) return;

    const navOffset = 88;
    const sceneRect = scene.getBoundingClientRect();
    const sceneTop = sceneRect.top + window.scrollY;
    const centeredTop = sceneTop - Math.max(navOffset, (window.innerHeight - sceneRect.height) / 2);

    window.scrollTo({
      top: Math.max(section.offsetTop - navOffset, centeredTop),
      behavior: 'smooth'
    });
  }
}
