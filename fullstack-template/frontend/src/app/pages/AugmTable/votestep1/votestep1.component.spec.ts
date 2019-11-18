import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Votestep1Component } from './votestep1.component';

describe('Votestep1Component', () => {
  let component: Votestep1Component;
  let fixture: ComponentFixture<Votestep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Votestep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Votestep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
