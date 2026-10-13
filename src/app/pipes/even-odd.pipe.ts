import { Pipe, PipeTransform } from '@angular/core';

export type Parity = 'even' | 'odd';

@Pipe({ name: 'evenOdd' })
export class EvenOddPipe implements PipeTransform {
  transform(numbers: number[], parity: Parity = 'even'): number[] {
    return numbers.filter((n) => (parity === 'even' ? n % 2 === 0 : n % 2 !== 0));
  }
}
