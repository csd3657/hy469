import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsProfileComponent } from './teams-profile.component';

describe('TeamsProfileComponent', () => {
  let component: TeamsProfileComponent;
  let fixture: ComponentFixture<TeamsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
