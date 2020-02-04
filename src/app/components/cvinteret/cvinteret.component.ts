import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cvinteret',
  templateUrl: './cvinteret.component.html',
  styleUrls: ['./cvinteret.component.scss']
})
export class CvinteretComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  loadComponent(component) {
    this.output.emit(component);
  }
}
