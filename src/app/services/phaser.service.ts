import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Phaser } from '../data/phaser';
import { PHASERS } from '../mocks/mock-phasers.module';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhaserService {
  constructor(private messageService: MessageService) {}

  getPhasers(): Observable<Phaser[]> {
    // TODO: Send the message after fetching the phasers...
    this.messageService.add('PhaserService: fetched phasers');
    return of(PHASERS);
  }
}
