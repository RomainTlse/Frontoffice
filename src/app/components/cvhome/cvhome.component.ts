import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cvhome',
  templateUrl: './cvhome.component.html',
  styleUrls: ['./cvhome.component.scss']
})
export class CvhomeComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faHome = faHome;
  faIdCard = faIdCard;

  constructor() { }

  ngOnInit() {
  }

  loadComponent(component) {
    this.output.emit(component);
  }
}
