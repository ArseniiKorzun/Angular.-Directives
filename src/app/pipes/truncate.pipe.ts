import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(text: string, maxLength = 50): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
}
