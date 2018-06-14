import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaserDetailComponent } from './phaser-detail.component';

describe('PhaserDetailComponent', () => {
  let component: PhaserDetailComponent;
  let fixture: ComponentFixture<PhaserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaserDetailComponent ]
    })
    .compileComponents();
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