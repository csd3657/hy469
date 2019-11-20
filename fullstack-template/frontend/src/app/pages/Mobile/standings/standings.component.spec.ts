import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { standingsComponent } from './standings.component';

describe('standingsComponent', () => {
  let component: standingsComponent;
  let fixture: ComponentFixture<standingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ standingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(standingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
