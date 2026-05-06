import { AfterViewInit, Component, ElementRef, inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import content from '../../content/content.json';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements AfterViewInit, OnDestroy {
  content = content;
  year = new Date().getFullYear();
  theme = inject(ThemeService);
  mobileOpen = signal(false);
  toggleMobile() { this.mobileOpen.update(v => !v); }

  private el = inject(ElementRef);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: ResizeObserver;

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    const bar = this.el.nativeElement.querySelector('.footer-bottom');
    this.observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        '--footer-height',
        `${entry.contentRect.height + 1}px`
      );
    });
    this.observer.observe(bar);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
