import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLogoComponent } from './home-page-logo.component';

describe('HomePageLogoComponent', () => {
  let component: HomePageLogoComponent;
  let fixture: ComponentFixture<HomePageLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
