import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIndicatorComponent } from './menu-indicator.component';

describe('MenuIndicatorComponent', () => {
  let component: MenuIndicatorComponent;
  let fixture: ComponentFixture<MenuIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
