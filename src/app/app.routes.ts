import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/shell/shell').then(m => m.Shell) },
  { path: '**', redirectTo: '' }
];
