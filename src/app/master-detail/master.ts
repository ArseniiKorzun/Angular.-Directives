import { Component, signal } from '@angular/core';
import { Detail } from './detail';
import { User } from './user';

@Component({
  selector: 'app-master',
  imports: [Detail],
  template: `
    <h2>4. Master / Detail (батьківський → дочірній, input)</h2>
    <div class="wrap">
      <ul>
        @for (user of users; track user.id) {
          <li [class.selected]="selected()?.id === user.id" (click)="selected.set(user)">
            {{ user.name }}
          </li>
        }
      </ul>
      <app-detail [user]="selected()" />
    </div>
  `,
  styles: `
    .wrap { display: flex; gap: 24px; align-items: flex-start; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { padding: 4px 12px; cursor: pointer; }
    li:hover { background: #eee; }
    li.selected { background: #0a7cff; color: #fff; }
  `,
})
export class Master {
  protected readonly users: User[] = [
    { id: 1, name: 'Олена Коваль', email: 'olena@example.com', city: 'Київ', age: 28 },
    { id: 2, name: 'Іван Петренко', email: 'ivan@example.com', city: 'Львів', age: 34 },
    { id: 3, name: 'Марія Шевченко', email: 'maria@example.com', city: 'Одеса', age: 22 },
    { id: 4, name: 'Андрій Бондар', email: 'andrii@example.com', city: 'Харків', age: 41 },
  ];
  protected readonly selected = signal<User | null>(null);
}
