import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumber'
})
export class ChangeNumberPipe implements PipeTransform {

  transform(value: number, args?: number): number {

    let n = value + args;

    return n;
  }

}
