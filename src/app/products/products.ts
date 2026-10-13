import { Component } from '@angular/core';

type Category = 'Електроніка' | 'Одяг' | 'Аксесуари';

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

@Component({
  selector: 'app-products',
  template: `
    <h2>3. Список продуктів онлайн-магазину</h2>
    @for (category of categories; track category) {
      <h3>{{ category }}</h3>
      <ul>
        @for (product of products; track product.id) {
          @if (product.category === category) {
            <li>
              @switch (product.category) {
                @case ('Електроніка') { [Е] }
                @case ('Одяг') { [О] }
                @case ('Аксесуари') { [А] }
              }
              {{ product.name }} — {{ product.price }} грн
            </li>
          }
        }
      </ul>
    }
  `,
})
export class Products {
  protected readonly categories: Category[] = ['Електроніка', 'Одяг', 'Аксесуари'];
  protected readonly products: Product[] = [
    { id: 1, name: 'Смартфон', price: 15000, category: 'Електроніка' },
    { id: 2, name: 'Ноутбук', price: 35000, category: 'Електроніка' },
    { id: 3, name: 'Навушники', price: 2500, category: 'Електроніка' },
    { id: 4, name: 'Футболка', price: 500, category: 'Одяг' },
    { id: 5, name: 'Джинси', price: 1200, category: 'Одяг' },
    { id: 6, name: 'Куртка', price: 3000, category: 'Одяг' },
    { id: 7, name: 'Годинник', price: 4000, category: 'Аксесуари' },
    { id: 8, name: 'Сонцезахисні окуляри', price: 800, category: 'Аксесуари' },
    { id: 9, name: 'Рюкзак', price: 1500, category: 'Аксесуари' },
  ];
}
