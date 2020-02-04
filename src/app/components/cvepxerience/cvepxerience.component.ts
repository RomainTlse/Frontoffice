import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {ExperiencesService} from '../../services/experiences.service';

@Component({
  selector: 'app-cvepxerience',
  templateUrl: './cvepxerience.component.html',
  styleUrls: ['./cvepxerience.component.scss']
})
export class CvepxerienceComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  faChevronUp = faChevronUp;
  activeXp = 0;

  private experience;
  private langages;
  private outils;

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
