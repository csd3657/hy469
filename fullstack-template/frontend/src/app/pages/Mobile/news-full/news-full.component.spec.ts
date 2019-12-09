import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFullComponent } from './news-full.component';

describe('NewsFullComponent', () => {
  let component: NewsFullComponent;
  let fixture: ComponentFixture<NewsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
