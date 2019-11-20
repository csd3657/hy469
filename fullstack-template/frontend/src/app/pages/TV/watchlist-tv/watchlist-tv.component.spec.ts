import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistTvComponent } from './watchlist-tv.component';

describe('WatchlistTvComponent', () => {
  let component: WatchlistTvComponent;
  let fixture: ComponentFixture<WatchlistTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
