import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly isDark = signal(this.initialValue());
  readonly isAuto = signal(false);

  constructor() {
    effect(() => {
      const dark = this.isDark();
      const auto = this.isAuto();
      const root = this.doc.documentElement;

      if (auto) {
        root.classList.add('auto-theme');
        root.classList.remove('light');
      } else {
        root.classList.remove('auto-theme');
        root.classList.toggle('light', !dark);
        if (this.isBrowser) {
          localStorage.setItem('theme', dark ? 'dark' : 'light');
        }
      }
    });
  }

  toggle() {
    this.isAuto.set(false);
    this.isDark.update(v => !v);
  }

  toggleAuto() {
    this.isAuto.update(v => !v);
  }

  private initialValue(): boolean {
    if (!this.isBrowser) return true;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
