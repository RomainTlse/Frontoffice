import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormationsService} from '../../services/formations.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cvformation',
  templateUrl: './cvformation.component.html',
  styleUrls: ['./cvformation.component.scss']
})
export class CvformationComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  faChevronRight = faChevronRight;

  public formations;

  constructor(private formationsService: FormationsService) { }

  ngOnInit() {
    this.formations = this.formationsService.getFormations();
  }

  loadComponent(component) {
    this.output.emit(component);
  }
}
