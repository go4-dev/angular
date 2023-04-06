import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaNumber',
})
export class CommaNumberPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().replace(".", ",");
  }
}
