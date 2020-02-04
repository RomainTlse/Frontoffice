import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvinteretComponent } from './cvinteret.component';

describe('CvinteretComponent', () => {
  let component: CvinteretComponent;
  let fixture: ComponentFixture<CvinteretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvinteretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvinteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
