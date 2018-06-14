import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Saber } from '../data/saber';
import { SABERS } from '../mocks/mock-saber.module';

@Injectable({
  providedIn: 'root'
})
export class SaberService {
  constructor() {}

  getSabers(): Observable<Saber[]> {
    return of(SABERS);
  }
}
