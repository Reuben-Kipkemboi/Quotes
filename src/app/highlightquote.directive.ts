import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.color = 'goldenrod'
   }

}
