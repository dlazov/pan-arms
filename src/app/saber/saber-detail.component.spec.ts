import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberDetailComponent } from './saber-detail.component';

describe('SaberDetailComponent', () => {
  let component: SaberDetailComponent;
  let fixture: ComponentFixture<SaberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaberDetailComponent ]
    })
    .compileComponents();
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
