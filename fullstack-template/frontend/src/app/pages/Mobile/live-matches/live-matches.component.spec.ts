import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { liveMatchesComponent } from './live-matches.component';

describe('liveMatchesComponent', () => {
  let component: liveMatchesComponent;
  let fixture: ComponentFixture<liveMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ liveMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(liveMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
