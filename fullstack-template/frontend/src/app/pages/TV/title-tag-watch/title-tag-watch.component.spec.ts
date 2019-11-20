import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTagWatchComponent } from './title-tag-watch.component';

describe('TitleTagWatchComponent', () => {
  let component: TitleTagWatchComponent;
  let fixture: ComponentFixture<TitleTagWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTagWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTagWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
