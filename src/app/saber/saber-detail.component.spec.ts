import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { SaberDetailComponent } from './saber-detail.component';

describe('SaberDetailComponent', () => {
  let component: SaberDetailComponent;
  let fixture: ComponentFixture<SaberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaberDetailComponent],
      providers: [{ provide: Location, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
