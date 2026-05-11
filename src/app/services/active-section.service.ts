import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  active = signal('home');
}
