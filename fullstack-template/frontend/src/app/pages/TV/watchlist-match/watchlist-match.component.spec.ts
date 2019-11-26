import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistMatchComponent } from './watchlist-match.component';

describe('WatchlistMatchComponent', () => {
  let component: WatchlistMatchComponent;
  let fixture: ComponentFixture<WatchlistMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
