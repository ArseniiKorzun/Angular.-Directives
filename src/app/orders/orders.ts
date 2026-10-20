import { Component } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';

type OrderStatus = 'paid' | 'pending' | 'cancelled';

interface Order {
  id: number;
  client: string;
  status: OrderStatus;
  sum: number;
}

@Component({
  selector: 'app-orders',
  imports: [NgClass, CurrencyPipe],
  template: `
    <h2>2. Таблиця замовлень (ngClass)</h2>
    <table>
      <thead>
        <tr>
          <th>Заказ №</th>
          <th>Клієнт</th>
          <th>Статус</th>
          <th>Сума</th>
        </tr>
      </thead>
      <tbody>
        @for (order of orders; track order.id) {
          <tr
            [ngClass]="{
              paid: order.status === 'paid',
              pending: order.status === 'pending',
              cancelled: order.status === 'cancelled',
            }"
          >
            <td>{{ order.id }}</td>
            <td>{{ order.client }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.sum | currency: 'UAH' : 'code' }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: `
    table { border-collapse: collapse; }
    th, td { border: 2px solid #fff; padding: 4px 8px; }
    .paid { background: #3ef03e; }
    .pending { background: #ffff00; }
    .cancelled { background: #f25b5b; }
  `,
})
export class Orders {
  protected readonly orders: Order[] = [
    { id: 1001, client: 'Ann', status: 'paid', sum: 120.5 },
    { id: 1002, client: 'Nick', status: 'pending', sum: 89.99 },
    { id: 1003, client: 'Mary', status: 'cancelled', sum: 230 },
    { id: 1004, client: 'Dave', status: 'paid', sum: 45 },
    { id: 1005, client: 'Tom', status: 'pending', sum: 300.25 },
    { id: 1006, client: 'Bob', status: 'cancelled', sum: 15.99 },
  ];
}
