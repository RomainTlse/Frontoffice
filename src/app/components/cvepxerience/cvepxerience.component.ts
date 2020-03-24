import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import {ExperiencesService} from '../../services/experiences.service';

let viewChild = ViewChild;

@Component({
  selector: 'app-cvepxerience',
  templateUrl: './cvepxerience.component.html',
  styleUrls: ['./cvepxerience.component.scss']
})
export class CvepxerienceComponent implements OnInit {

  @Output() output = new EventEmitter<string>();
  viewHeight: number;

  faChevronUp = faChevronUp;
  faPenSquare = faPenSquare;
  faBuilding = faBuilding;
  faLaptopCode = faLaptopCode;
  faToolbox = faToolbox;
  faUserCog = faUserCog;
  activeXp = 0;

  public experience;
  public langages;
  public outils;

  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit() {
    this.experience = this.experiencesService.getExperience(this.activeXp);
    this.langages = this.experience.langages.join(', ');
    this.outils = this.experience.outils.join(', ');
  }

  @HostListener('mousewheel', ['$event']) public windowScrolled($event: WheelEvent) {
    if ($event.deltaY < 0) {
      this.activeXp--;
      if (this.activeXp === -1) {
        this.activeXp = 6;
      }
    } else {
      this.activeXp++;
      if (this.activeXp === 7 ) {
        this.activeXp = 0;
      }
    }
    this.experience = this.experiencesService.getExperience(this.activeXp);
    this.langages = this.experience.langages.join(', ');
    this.outils = this.experience.outils.join(', ');
  }

  loadComponent(component) {
    this.output.emit(component);
  }

  updateData(id: number) {
    this.activeXp = id;
    this.experience = this.experiencesService.getExperience(this.activeXp);
    this.langages = this.experience.langages.join(', ');
    this.outils = this.experience.outils.join(', ');
  }
}
