import { Component, signal } from '@angular/core';

type Giant = 'car' | 'plane' | 'ship';

@Component({
  selector: 'app-giants',
  template: `
    <h2>4. Найбільші на планеті</h2>
    <button (click)="selected.set('car')">Автомобіль</button>
    <button (click)="selected.set('plane')">Літак</button>
    <button (click)="selected.set('ship')">Корабель</button>

    @switch (selected()) {
      @case ('car') {
        <h3>БелАЗ-75710</h3>
        <p>
          Найбільший у світі кар'єрний самоскид. Вантажопідйомність — 450 тонн, маса — близько 360 тонн,
          довжина — 20,6 м, висота — 8,2 м. Має 8 коліс і два дизельні двигуни загальною потужністю 4600 к.с.
        </p>
      }
      @case ('plane') {
        <h3>Ан-225 «Мрія»</h3>
        <p>
          Найбільший і найважчий літак в історії. Максимальна злітна маса — 640 тонн, розмах крил — 88,4 м,
          довжина — 84 м, 6 турбореактивних двигунів. Знищений у 2022 році в Гостомелі.
        </p>
      }
      @case ('ship') {
        <h3>Seawise Giant (Knock Nevis)</h3>
        <p>
          Найбільше судно, коли-небудь побудоване. Довжина — 458,45 м, ширина — 68,8 м,
          дедвейт — 564 763 тонни. Нафтовий супертанкер, утилізований у 2010 році.
        </p>
      }
      @default {
        <p>Оберіть об'єкт, натиснувши одну з кнопок.</p>
      }
    }
  `,
})
export class Giants {
  protected readonly selected = signal<Giant | null>(null);
}
