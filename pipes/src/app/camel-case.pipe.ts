import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let values: string[] = value.split(' ');
    let result = '';

    for(let v of values) {
      result += this.capitalize(v) + " ";
    }

    return result;
  }

  capitalize(value: string) {
    return value.substring(0,1).toLowerCase() + value.substring(1).toUpperCase()
  }

}
