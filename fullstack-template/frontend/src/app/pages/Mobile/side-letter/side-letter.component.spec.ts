import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLetterComponent } from './side-letter.component';

describe('SideLetterComponent', () => {
  let component: SideLetterComponent;
  let fixture: ComponentFixture<SideLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
