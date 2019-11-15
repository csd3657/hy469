import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugTableVOTEtopmenuComponent } from './aug-table-votetopmenu.component';

describe('AugTableVOTEtopmenuComponent', () => {
  let component: AugTableVOTEtopmenuComponent;
  let fixture: ComponentFixture<AugTableVOTEtopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugTableVOTEtopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugTableVOTEtopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
