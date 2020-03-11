/**
 * component utilisé pour la page cv
 */

import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {CvDirective} from './cv.directive';
import {CvhomeComponent} from '../../components/cvhome/cvhome.component';
import {CvcompetenceComponent} from '../../components/cvcompetence/cvcompetence.component';
import {CvepxerienceComponent} from '../../components/cvepxerience/cvepxerience.component';
import {CvformationComponent} from '../../components/cvformation/cvformation.component';
import {CvinteretComponent} from '../../components/cvinteret/cvinteret.component';
import {MenuService} from '../../services/menu.service';

interface IComp {
  output: any;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  @ViewChild(CvDirective, {static: true}) appCvContent: CvDirective;

  /**
   * @constructor
   * @param componentFactoryResolver
   * @param menuService
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private menuService: MenuService) { }

  /**
   * @description Init the component
   */
  ngOnInit() {
    this.loadComponent('home');
  }

  /**
   * @name loadComponent
   * @description définit dynamiquement le composant fils
   * @param component
   */
  loadComponent(component) {
    let componentFactory;

    switch (component) {
      case 'home':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CvhomeComponent);
        break;

      case 'competence':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CvcompetenceComponent);
        break;

      case 'experience':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CvepxerienceComponent);
        break;

      case 'formation':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CvformationComponent);
        break;

      case 'interet':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CvinteretComponent);
        break;
    }

    const viewContainerRef = this.appCvContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    if ((componentRef.instance as IComp).output) {
      (componentRef.instance as IComp).output.subscribe(
        data => this.loadComponent(data)
      );
    }

    this.menuService.setMenu(component);
  }

}
