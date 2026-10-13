import { Component, signal } from '@angular/core';
import { EvenOddPipe, Parity } from '../pipes/even-odd.pipe';

@Component({
  selector: 'app-numbers',
  imports: [EvenOddPipe],
  template: `
    <h2>1. Фільтрація списку чисел</h2>
    <p>Масив: {{ numbers.join(', ') }}</p>
    <button (click)="parity.set('even')">Парні</button>
    <button (click)="parity.set('odd')">Непарні</button>
    <p>
      {{ parity() === 'even' ? 'Парні' : 'Непарні' }}:
      {{ (numbers | evenOdd: parity()).join(', ') }}
    </p>
  `,
})
export class Numbers {
  protected readonly numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  protected readonly parity = signal<Parity>('even');
}
