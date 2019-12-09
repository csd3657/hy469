import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRowComponent } from './news-row.component';

describe('NewsRowComponent', () => {
  let component: NewsRowComponent;
  let fixture: ComponentFixture<NewsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
