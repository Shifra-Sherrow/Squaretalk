import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(sumSeconds: number): string {
    const hours   = Math.floor(sumSeconds / 3600);
    const minutes = Math.floor((sumSeconds - (hours * 3600)) / 60);
    const seconds = sumSeconds - (hours * 3600) - (minutes * 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

}
