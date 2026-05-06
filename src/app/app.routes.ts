import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',          loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio) },
  { path: 'projects',  loadComponent: () => import('./pages/scene/scene').then(m => m.Scene) },
  { path: 'about',     loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact',   loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: '**',        redirectTo: '' }
];
