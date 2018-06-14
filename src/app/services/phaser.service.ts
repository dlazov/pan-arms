import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Phaser } from '../data/phaser';
import { PHASERS } from '../mocks/mock-phasers.module';

@Injectable({
  providedIn: 'root'
})
export class PhaserService {
  constructor() {}

  getPhasers(): Observable<Phaser[]> {
    return of(PHASERS);
  }
}
