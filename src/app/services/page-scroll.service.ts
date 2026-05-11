import { Injectable, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

const PAGE_ORDER = ['/', '/projects', '/portfolio', '/about', '/contact'];
const DELTA_THRESHOLD = 120;
const COOLDOWN_MS = 1400;

@Injectable({ providedIn: 'root' })
export class PageScrollService {
  private router = inject(Router);
  private platform = inject(PLATFORM_ID);
  private cooldown = false;
  private accumulated = 0;

  currentIndex = signal(0);
  hasNext = computed(() => this.currentIndex() < PAGE_ORDER.length - 1);
  hasPrev = computed(() => this.currentIndex() > 0);

  init() {
    if (!isPlatformBrowser(this.platform)) return;

    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(e => {
      const url = e.urlAfterRedirects.split('?')[0];
      const idx = PAGE_ORDER.findIndex(p => p === url);
      this.currentIndex.set(idx >= 0 ? idx : 0);
      this.accumulated = 0;
    });

    window.addEventListener('wheel', (e: WheelEvent) => this.onWheel(e), { passive: true });
  }

  private onWheel(e: WheelEvent) {
    if (this.cooldown) return;

    const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 8;
    const atTop    = window.scrollY <= 0;

    if (e.deltaY > 0 && atBottom) {
      this.accumulated += e.deltaY;
      if (this.accumulated >= DELTA_THRESHOLD) this.navigate(1);
    } else if (e.deltaY < 0 && atTop) {
      this.accumulated += e.deltaY;
      if (this.accumulated <= -DELTA_THRESHOLD) this.navigate(-1);
    } else {
      this.accumulated = 0;
    }
  }

  private navigate(dir: 1 | -1) {
    const next = PAGE_ORDER[this.currentIndex() + dir];
    if (!next) return;
    this.cooldown = true;
    this.accumulated = 0;
    this.router.navigate([next]);
    window.scrollTo({ top: dir > 0 ? 0 : document.body.scrollHeight, behavior: 'instant' });
    setTimeout(() => { this.cooldown = false; }, COOLDOWN_MS);
  }
}
