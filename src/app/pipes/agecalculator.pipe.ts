import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agecalculator'
})

export class AgecalculatorPipe implements PipeTransform {
  transform(value: String, args: any) : String {
    return '';
  }
}