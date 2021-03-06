import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Phaser } from '../data/phaser';

@Component({
  selector: 'pan-phaser-detail',
  templateUrl: './phaser-detail.component.html',
  styleUrls: ['./phaser-detail.component.scss']
})
export class PhaserDetailComponent implements OnInit {
  @Input() phaser: Phaser;
  @Input() itemsRequested: number;
  itemsOrdered: number;

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  onOrderClick() {
    this.itemsOrdered = this.itemsRequested;
  }
}
