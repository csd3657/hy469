import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPageTeamComponent } from './specific-page-team.component';

describe('SpecificPageTeamComponent', () => {
  let component: SpecificPageTeamComponent;
  let fixture: ComponentFixture<SpecificPageTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPageTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
