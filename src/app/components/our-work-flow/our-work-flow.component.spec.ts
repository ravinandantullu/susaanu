import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkFlowComponent } from './our-work-flow.component';

describe('OurWorkFlowComponent', () => {
  let component: OurWorkFlowComponent;
  let fixture: ComponentFixture<OurWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
