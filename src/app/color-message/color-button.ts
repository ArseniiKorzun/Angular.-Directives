import { Component, input, output } from '@angular/core';

export interface ColorMessage {
  text: string;
  color: string;
}

@Component({
  selector: 'app-color-button',
  template: `
    <button [style.background]="color()" (click)="send.emit({ text: text(), color: color() })">
      {{ text() }}
    </button>
  `,
  styles: `
    button { color: #fff; border: none; padding: 8px 16px; margin-right: 8px; cursor: pointer; font-size: 16px; }
  `,
})
export class ColorButton {
  readonly text = input.required<string>();
  readonly color = input.required<string>();
  readonly send = output<ColorMessage>();
}
