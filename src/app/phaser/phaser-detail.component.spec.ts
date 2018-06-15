import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { PhaserDetailComponent } from './phaser-detail.component';

describe('PhaserDetailComponent', () => {
  let component: PhaserDetailComponent;
  let fixture: ComponentFixture<PhaserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhaserDetailComponent],
      providers: [{ provide: Location, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
