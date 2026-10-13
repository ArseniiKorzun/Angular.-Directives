import { Component } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-text',
  imports: [TruncatePipe],
  template: `
    <h2>2. Обрізання тексту</h2>
    <p><b>Повний текст:</b> {{ text }}</p>
    <p><b>Обрізаний ({{ maxLength }} символів):</b> {{ text | truncate: maxLength }}</p>
  `,
})
export class Text {
  protected readonly maxLength = 60;
  protected readonly text =
    'Angular — це платформа та фреймворк для створення односторінкових клієнтських застосунків ' +
    'за допомогою HTML і TypeScript. Він реалізує основну та додаткову функціональність ' +
    'як набір бібліотек, які ви імпортуєте у свої застосунки.';
}
