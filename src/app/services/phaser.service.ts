import { Injectable } from '@angular/core';

import { Phaser } from '../data/phaser';
import { PHASERS } from '../mocks/mock-phasers.module';

@Injectable({
  providedIn: 'root'
})
export class PhaserService {
  constructor() {}

  getPhasers(): Phaser[] {
    return PHASERS;
  }
}
