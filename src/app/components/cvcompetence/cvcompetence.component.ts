import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cvcompetence',
  templateUrl: './cvcompetence.component.html',
  styleUrls: ['./cvcompetence.component.scss']
})
export class CvcompetenceComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  color = 'primary';
  mode = 'determinate';
  value = 90;
  valuePhp = 80;
  valueNode = 70;
  bufferValue = 75;
  step = 0;

  constructor() { }

  ngOnInit() {
  }

  loadComponent(component) {
    this.output.emit(component);
  }

  setStep(index: number) {
    this.step = index;
  }
}
