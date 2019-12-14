import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLogoHeartComponent } from './team-logo-heart.component';

describe('TeamLogoHeartComponent', () => {
  let component: TeamLogoHeartComponent;
  let fixture: ComponentFixture<TeamLogoHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLogoHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLogoHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
