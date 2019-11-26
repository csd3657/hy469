import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Votestep2Component } from './votestep2.component';

describe('Votestep2Component', () => {
  let component: Votestep2Component;
  let fixture: ComponentFixture<Votestep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Votestep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Votestep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
