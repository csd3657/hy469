import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeaderTagComponent } from './team-header-tag.component';

describe('TeamHeaderTagComponent', () => {
  let component: TeamHeaderTagComponent;
  let fixture: ComponentFixture<TeamHeaderTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHeaderTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeaderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
