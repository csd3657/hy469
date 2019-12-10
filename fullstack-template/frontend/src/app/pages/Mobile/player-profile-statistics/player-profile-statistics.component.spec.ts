import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileStatisticsComponent } from './player-profile-statistics.component';

describe('PlayerProfileStatisticsComponent', () => {
  let component: PlayerProfileStatisticsComponent;
  let fixture: ComponentFixture<PlayerProfileStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfileStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
