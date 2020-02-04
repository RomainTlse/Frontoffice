import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import {MatInputModule} from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUYXcxVvUyjlcMpeNqBYtvqloc0qV7z2o'
    })
  ],
  exports: [ContactComponent],
  declarations: [
    ContactComponent,
  ],
})
export class ContactModule { }
