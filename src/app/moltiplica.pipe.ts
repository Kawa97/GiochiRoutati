import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sconto'})
export class MoltiplicaPipe implements PipeTransform {

  transform(value: number, molti: number): number {
    let tot = value/100*(100-molti);
    return tot;
  }

}
