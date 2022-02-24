import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef) { 
    // console.log(element,'element');
    element.nativeElement.style.backgroundColor='aqua'
  }

}
