import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTeamStatisticsComponent } from './specific-team-statistics.component';

describe('SpecificTeamStatisticsComponent', () => {
  let component: SpecificTeamStatisticsComponent;
  let fixture: ComponentFixture<SpecificTeamStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTeamStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTeamStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
