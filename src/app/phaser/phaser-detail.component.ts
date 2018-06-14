import { Component, OnInit, Input } from '@angular/core';
import { Phaser } from '../data/phaser';

@Component({
  selector: 'pan-phaser-detail',
  templateUrl: './phaser-detail.component.html',
  styleUrls: ['./phaser-detail.component.scss']
})
export class PhaserDetailComponent implements OnInit {
  @Input() phaser: Phaser;

  constructor() {}

  ngOnInit() {}
}
