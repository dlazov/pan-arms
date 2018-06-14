import { Component, OnInit, Input } from '@angular/core';
import { Saber } from '../data/saber';

@Component({
  selector: 'pan-saber-detail',
  templateUrl: './saber-detail.component.html',
  styleUrls: ['./saber-detail.component.scss']
})
export class SaberDetailComponent implements OnInit {
  @Input() saber: Saber;

  constructor() {}

  ngOnInit() {}
}
