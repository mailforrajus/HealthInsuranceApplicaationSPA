import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.color='red';

   }

}
