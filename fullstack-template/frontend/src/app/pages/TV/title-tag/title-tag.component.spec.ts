import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTagComponent } from './title-tag.component';

describe('TitleTagComponent', () => {
  let component: TitleTagComponent;
  let fixture: ComponentFixture<TitleTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
