import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(boolValue: boolean, lang: string = "en"): string {
    if(lang === "en") {
    return (boolValue) ? "Yes" : "No";
    } else {
      return (boolValue) ? "Oui" : "Non";
    }
  }

}
