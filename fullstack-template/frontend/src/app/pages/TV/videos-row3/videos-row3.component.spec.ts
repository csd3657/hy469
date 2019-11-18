import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosRow3Component } from './videos-row3.component';

describe('VideosRow3Component', () => {
  let component: VideosRow3Component;
  let fixture: ComponentFixture<VideosRow3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosRow3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosRow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
