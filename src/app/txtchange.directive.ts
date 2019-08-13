import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTxtchange]'
})
export class TxtchangeDirective {

  constructor(e: ElementRef) {
    e.nativeElement.style = 'background-color: pink;color: blue';
    e.nativeElement.innerText = 'I changed you';
   }

}
