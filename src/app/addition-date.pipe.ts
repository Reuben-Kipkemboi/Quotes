import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'additionDate'
})
export class AdditionDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
