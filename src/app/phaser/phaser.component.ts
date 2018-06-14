import { Component, OnInit } from '@angular/core';
import { Phaser } from '../data/phaser';
import { PHASERS } from '../mocks/mock-phasers.module';

@Component({
  selector: 'pan-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.scss']
})
export class PhaserComponent implements OnInit {
  phasers = PHASERS;
  selectedPhaser: Phaser;

  constructor() {}

  ngOnInit() {}

  onSelect(phaser: Phaser): void {
    this.selectedPhaser = phaser;
  }
}
