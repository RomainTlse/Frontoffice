import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvformationComponent } from './cvformation.component';

describe('CvformationComponent', () => {
  let component: CvformationComponent;
  let fixture: ComponentFixture<CvformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
