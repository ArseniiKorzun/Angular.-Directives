import { Component, signal } from '@angular/core';
import { ColorButton, ColorMessage } from './color-button';

@Component({
  selector: 'app-color-message',
  imports: [ColorButton],
  template: `
    <h2>5. Передача тексту та кольору (дочірній → батьківський, output)</h2>
    <app-color-button text="Привіт!" color="crimson" (send)="message.set($event)" />
    <app-color-button text="Angular — це круто" color="seagreen" (send)="message.set($event)" />
    <app-color-button text="Взаємодія компонентів" color="royalblue" (send)="message.set($event)" />

    @if (message(); as m) {
      <p [style.color]="m.color" class="msg">{{ m.text }}</p>
    } @else {
      <p>Натисніть на будь-яку кнопку.</p>
    }
  `,
  styles: `
    .msg { font-size: 22px; font-weight: bold; }
  `,
})
export class ColorMessageParent {
  protected readonly message = signal<ColorMessage | null>(null);
}
