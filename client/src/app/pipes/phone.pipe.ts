import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone) return '';

    const position = phone.length === 10 ? 3 : 2;
    return [phone.slice(0, position), '-', phone.slice(position)].join('');
  }

}
