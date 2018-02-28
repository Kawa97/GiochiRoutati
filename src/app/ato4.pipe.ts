import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ato4'
})
export class Ato4Pipe implements PipeTransform {

  transform(value: string,arg:string): string {
    return value.replace("a",arg).replace("a",arg);
  }

}
