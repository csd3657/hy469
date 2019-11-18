import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosRowComponent } from './videos-row.component';

describe('VideosRowComponent', () => {
  let component: VideosRowComponent;
  let fixture: ComponentFixture<VideosRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
