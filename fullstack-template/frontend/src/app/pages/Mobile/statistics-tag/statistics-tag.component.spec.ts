import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTagComponent } from './statistics-tag.component';

describe('StatisticsTagComponent', () => {
  let component: StatisticsTagComponent;
  let fixture: ComponentFixture<StatisticsTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
