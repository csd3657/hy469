import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMatchComponent } from './first-match.component';

describe('FirstMatchComponent', () => {
  let component: FirstMatchComponent;
  let fixture: ComponentFixture<FirstMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
