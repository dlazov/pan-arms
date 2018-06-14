import { Component, OnInit } from '@angular/core';
import { Saber } from '../data/saber';
import { SABERS } from '../mocks/mock-saber.module';

@Component({
  selector: 'pan-saber',
  templateUrl: './saber.component.html',
  styleUrls: ['./saber.component.scss']
})
export class SaberComponent implements OnInit {
  sabers = SABERS;
  selectedSaber: Saber;

  constructor() {}

  ngOnInit() {}

  onSelect(saber: Saber): void {
    this.selectedSaber = saber;
  }
}
