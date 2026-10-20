import { Component, computed, signal } from '@angular/core';
import { NgStyle } from '@angular/common';

type ConnectionStatus = 'online' | 'away' | 'offline';

@Component({
  selector: 'app-status',
  imports: [NgStyle],
  template: `
    <h2>3. Статус підключення ([style.color], ngStyle)</h2>
    <p
      [style.color]="status() === 'online' ? 'green' : status() === 'away' ? 'orange' : 'gray'"
      [ngStyle]="extraStyles()"
    >
      Статус: {{ status() }}
    </p>
    <select [value]="status()" (change)="status.set($any($event.target).value)">
      <option value="online">Онлайн</option>
      <option value="away">Відійшов</option>
      <option value="offline">Офлайн</option>
    </select>
  `,
})
export class Status {
  protected readonly status = signal<ConnectionStatus>('online');
  protected readonly extraStyles = computed(() => ({
    'font-size': this.status() === 'online' ? '20px' : '28px',
    'font-weight': this.status() === 'online' ? 'bold' : 'normal',
    'font-style': this.status() === 'offline' ? 'italic' : 'normal',
  }));
}
