import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTVComponent } from './schedule-tv.component';

describe('ScheduleTVComponent', () => {
  let component: ScheduleTVComponent;
  let fixture: ComponentFixture<ScheduleTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
