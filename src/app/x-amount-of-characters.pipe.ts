import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xAmountOfCharacters'
})
export class XAmountOfCharactersPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length > 5){
      return value.substr(0, 5) + ' ...';
    }
    return value;
  }
}
