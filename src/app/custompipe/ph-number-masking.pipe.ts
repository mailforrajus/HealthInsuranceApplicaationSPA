import { Pipe, PipeTransform } from '@angular/core';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Pipe({
  name: 'phNumberMasking'
})
export class PhNumberMaskingPipe implements PipeTransform {
  transform(value: any): any {
    for (var i = value.length - 5; i < value.length; i++) {
      value = value.replace(value.charAt(i), '*');
      console.log(value)
    }
    return value;
  }
}
