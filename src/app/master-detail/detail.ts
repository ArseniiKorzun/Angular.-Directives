import { Component, input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-detail',
  template: `
    @if (user(); as u) {
      <h3>{{ u.name }}</h3>
      <p>Email: {{ u.email }}</p>
      <p>Місто: {{ u.city }}</p>
      <p>Вік: {{ u.age }}</p>
    } @else {
      <p>Оберіть користувача зі списку.</p>
    }
  `,
  styles: `
    :host { display: block; border: 1px solid #999; padding: 8px 16px; min-width: 220px; }
  `,
})
export class Detail {
  readonly user = input<User | null>(null);
}
