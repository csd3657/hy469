import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newsRowComponent } from './news-row.component';

describe('newsRowComponent', () => {
  let component: newsRowComponent;
  let fixture: ComponentFixture<newsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ newsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(newsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
