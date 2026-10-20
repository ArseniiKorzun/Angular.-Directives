import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-active-buttons',
  template: `
    <h2>1. Підсвічування активної кнопки ([class.active])</h2>
    <div class="group">
      @for (label of labels; track label) {
        <button [class.active]="active() === label" (click)="active.set(label)">{{ label }}</button>
      }
    </div>
  `,
  styles: `
    .group { display: inline-flex; }
    button {
      font-size: 24px;
      padding: 4px 18px;
      background: #e0e0e0;
      border: 1px solid #999;
      cursor: pointer;
    }
    button.active {
      background: #0a7cff;
      color: #fff;
      border: 2px solid #000;
    }
  `,
})
export class ActiveButtons {
  protected readonly labels = ['A', 'B', 'C'];
  protected readonly active = signal('B');
}
