import { Component } from '@angular/core';
import { Numbers } from './numbers/numbers';
import { Text } from './text/text';
import { Products } from './products/products';
import { Giants } from './giants/giants';

@Component({
  selector: 'app-root',
  imports: [Numbers, Text, Products, Giants],
  template: `
    <app-numbers />
    <hr />
    <app-text />
    <hr />
    <app-products />
    <hr />
    <app-giants />
  `,
})
export class App {}
