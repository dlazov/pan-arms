import { Component, OnInit } from '@angular/core';
import { Saber } from '../data/saber';
import { SaberService } from '../services/saber.service';

@Component({
  selector: 'pan-saber',
  templateUrl: './saber.component.html',
  styleUrls: ['./saber.component.scss']
})
export class SaberComponent implements OnInit {
  sabers: Saber[];
  selectedSaber: Saber;

  constructor(private saberService: SaberService) {}

  ngOnInit() {
    this.getSabers();
  }

  onSelect(saber: Saber): void {
    this.selectedSaber = saber;
  }

  getSabers(): void {
    this.sabers = this.saberService.getSabers();
  }
}
