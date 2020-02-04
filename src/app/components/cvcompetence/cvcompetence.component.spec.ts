import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcompetenceComponent } from './cvcompetence.component';

describe('CvcompetenceComponent', () => {
  let component: CvcompetenceComponent;
  let fixture: ComponentFixture<CvcompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvcompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
