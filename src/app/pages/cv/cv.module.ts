import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvComponent } from './cv.component';
import { CvDirective } from './cv.directive';
import { CvhomeComponent } from '../../components/cvhome/cvhome.component';
import { CvcompetenceComponent } from '../../components/cvcompetence/cvcompetence.component';
import { CvepxerienceComponent } from '../../components/cvepxerience/cvepxerience.component';
import { CvformationComponent } from '../../components/cvformation/cvformation.component';
import { CvinteretComponent } from '../../components/cvinteret/cvinteret.component';
import { PresentationComponent } from '../../shared/presentation/presentation.component';
import { MenuComponent } from '../../shared/menu/menu.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatListModule,
    FontAwesomeModule,
  ],
  exports: [CvComponent],
  declarations: [
    CvComponent,
    CvhomeComponent,
    CvDirective,
    CvcompetenceComponent,
    CvepxerienceComponent,
    CvformationComponent,
    CvinteretComponent,
    PresentationComponent,
    MenuComponent,
  ],
  entryComponents: [
    CvhomeComponent,
    CvcompetenceComponent,
    CvepxerienceComponent,
    CvformationComponent,
    CvinteretComponent,
  ],
})
export class CvModule { }
