import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvepxerienceComponent } from './cvepxerience.component';

describe('CvepxerienceComponent', () => {
  let component: CvepxerienceComponent;
  let fixture: ComponentFixture<CvepxerienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvepxerienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvepxerienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
