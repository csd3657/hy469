import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileTagComponent } from './player-profile-tag.component';

describe('PlayerProfileTagComponent', () => {
  let component: PlayerProfileTagComponent;
  let fixture: ComponentFixture<PlayerProfileTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfileTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
