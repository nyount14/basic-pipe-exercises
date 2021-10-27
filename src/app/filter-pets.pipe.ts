import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPets'
})
export class FilterPetsPipe implements PipeTransform {

  transform(value: any, filterResults: string): any {
    console.log(value, "value")
    console.log(filterResults, "filterResults")
    return [];
  };
    // if (value.length === 0) {
    //   return value;
    // }
    // const resultArray = [];
    // for (const item of value) {
    //   if (item === filterResults) {
    //     resultArray.push(item);
    //   }
    // }
    // return resultArray;
  }
