import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/shell/shell').then(m => m.Shell) },
  { path: 'playground', loadComponent: () => import('./pages/playground/playground').then(m => m.Playground) },
  { path: '**', redirectTo: '' }
];
