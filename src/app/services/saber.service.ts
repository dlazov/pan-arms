import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Saber } from '../data/saber';
import { SABERS } from '../mocks/mock-saber.module';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SaberService {
  constructor(private messageService: MessageService) {}

  getSabers(): Observable<Saber[]> {
    // TODO: Send the message after fetching the sabers...
    this.messageService.add('SaberService: fetched sabers');
    return of(SABERS);
  }
}
