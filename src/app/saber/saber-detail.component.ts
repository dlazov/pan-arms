import { Component, OnInit, Input } from '@angular/core';
import { Saber } from '../data/saber';
import { Location } from '@angular/common';

@Component({
  selector: 'pan-saber-detail',
  templateUrl: './saber-detail.component.html',
  styleUrls: ['./saber-detail.component.scss']
})
export class SaberDetailComponent implements OnInit {
  @Input() saber: Saber;
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
