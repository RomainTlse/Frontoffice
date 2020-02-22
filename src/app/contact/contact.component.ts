import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lat: number;
  public lng: number;
  public latMap: number;
  public lngMap: number;
  faLinkedin = faLinkedin;
  faPaperPlane = faPaperPlane;
  faMapMarkedAlt = faMapMarkedAlt;
  faMobileAlt = faMobileAlt;
  faEnvelope = faEnvelope;
  faHome = faHome;

  constructor() {
    this.lat = 43.415540;
    this.lng = 1.169905;
    this.latMap = 43.510070;
    this.lngMap = 1.307631;
  }
  ngOnInit() {
  }

}
