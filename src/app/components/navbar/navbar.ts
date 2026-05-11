import { Component, inject, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ActiveSectionService } from '../../services/active-section.service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  sectionSvc = inject(ActiveSectionService);
  menuOpen = signal(false);
  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
  isActive(id: string) { return this.sectionSvc.active() === id; }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const toolbar = document.querySelector('.navbar-bar') as HTMLElement | null;
    const topOffset = (toolbar?.offsetHeight ?? 88) + 12;
    const top = el.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    this.closeMenu();
  }
}
