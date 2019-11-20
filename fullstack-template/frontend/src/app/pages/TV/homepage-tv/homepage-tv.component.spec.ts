import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTVComponent } from './homepage-tv.component';

describe('HomepageTVComponent', () => {
  let component: HomepageTVComponent;
  let fixture: ComponentFixture<HomepageTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
