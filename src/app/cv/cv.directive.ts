import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-cv-content]'
})
export class CvDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
