import { Component, OnInit } from '@angular/core';
import { Phaser } from '../data/phaser';
import { PhaserService } from '../services/phaser.service';

@Component({
  selector: 'pan-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.scss']
})
export class PhaserComponent implements OnInit {
  phasers: Phaser[];
  selectedPhaser: Phaser;

  constructor(private phaserService: PhaserService) {}

  ngOnInit() {
    this.getPhasers();
  }

  onSelect(phaser: Phaser): void {
    this.selectedPhaser = phaser;
  }

  getPhasers(): void {
    this.phasers = this.phaserService.getPhasers();
  }
}
