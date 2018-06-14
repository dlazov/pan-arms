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

  // Subscribe asynchronous to the data, now it's just mocked but real data will come from a back-end somewhere.
  getPhasers(): void {
    this.phaserService.getPhasers().subscribe(phasers => (this.phasers = phasers));
  }
}
