import { Injectable } from '@angular/core';

import { Saber } from '../data/saber';
import { SABERS } from '../mocks/mock-saber.module';

@Injectable({
  providedIn: 'root'
})
export class SaberService {
  constructor() {}

  getSabers(): Saber[] {
    return SABERS;
  }
}
