import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTVComponent } from './video-tv.component';

describe('VideoTVComponent', () => {
  let component: VideoTVComponent;
  let fixture: ComponentFixture<VideoTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
