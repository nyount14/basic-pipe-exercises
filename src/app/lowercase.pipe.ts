import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'lowercase'
})
export class Lowercase implements PipeTransform {
 transform(value: any) {
   return value.toLowerCase();
 }
}
