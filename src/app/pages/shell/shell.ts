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
  readonly labLoaded = signal(false);

  readonly activeSection = this.sectionSvc.active;
  loadLab() { this.labLoaded.set(true); }
  unloadLab() { this.labLoaded.set(false); }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = Array.from(
      this.host.nativeElement.querySelectorAll('[data-spy-section]')
    ) as HTMLElement[];
    this.observedSections = sections;

    this.observer = new IntersectionObserver(() => {
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
    const viewportProbe = navOffset + (window.innerHeight - navOffset) * 0.3;
    let best: HTMLElement | null = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const section of this.observedSections) {
      const rect = section.getBoundingClientRect();
      const inView = rect.bottom > navOffset && rect.top < window.innerHeight;
      if (!inView) continue;

      const distance = Math.abs(rect.top - viewportProbe);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = section;
      }
    }

    if (best?.id) this.sectionSvc.active.set(best.id);
  }
}
