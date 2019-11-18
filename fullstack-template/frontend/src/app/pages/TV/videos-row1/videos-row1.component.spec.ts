import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosRow1Component } from './videos-row1.component';

describe('VideosRow1Component', () => {
  let component: VideosRow1Component;
  let fixture: ComponentFixture<VideosRow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosRow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
