import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCenterContentComponent } from './home-page-center-content.component';

describe('HomePageCenterContentComponent', () => {
  let component: HomePageCenterContentComponent;
  let fixture: ComponentFixture<HomePageCenterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCenterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCenterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
