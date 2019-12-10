import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfilePageComponent } from './player-profile-page.component';

describe('PlayerProfilePageComponent', () => {
  let component: PlayerProfilePageComponent;
  let fixture: ComponentFixture<PlayerProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
