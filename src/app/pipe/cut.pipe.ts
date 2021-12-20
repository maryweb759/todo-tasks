import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string,limit = 50, showAll = false, elipsis = '....') {
    if (showAll) {
      return value;
    }
    
 return value.length > limit ? value.substr(0, limit) + elipsis: value ;
}

}
