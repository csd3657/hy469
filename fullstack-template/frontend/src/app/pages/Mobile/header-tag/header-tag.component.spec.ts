import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTagComponent } from './header-tag.component';

describe('HeaderTagComponent', () => {
  let component: HeaderTagComponent;
  let fixture: ComponentFixture<HeaderTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
