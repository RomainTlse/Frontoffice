import { Injectable } from '@angular/core';

interface Formations {
  dateLabel: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private formationData: Array<Formations>;

  constructor() {
    this.formationData = [
      { dateLabel: '2003', title: 'Bac S' },
      { dateLabel: '2010', title: 'M2 Miage' },
      { dateLabel: '2012', title: 'PHP5' },
      { dateLabel: '2013', title: 'Responsive Web Design' },
      { dateLabel: '2016', title: 'NodeJs' },
      { dateLabel: '2017', title: 'AngularJs' },
      { dateLabel: '2018', title: 'Angular4' },
      { dateLabel: '2019', title: '.net & .net Core' }
    ];
  }

  getFormations() {
    return this.formationData;
  }
}
