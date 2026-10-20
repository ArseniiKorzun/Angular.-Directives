import { Component } from '@angular/core';
import { ActiveButtons } from './active-buttons/active-buttons';
import { Orders } from './orders/orders';
import { Status } from './status/status';
import { Master } from './master-detail/master';
import { ColorMessageParent } from './color-message/color-message';

@Component({
  selector: 'app-root',
  imports: [ActiveButtons, Orders, Status, Master, ColorMessageParent],
  template: `
    <app-active-buttons />
    <hr />
    <app-orders />
    <hr />
    <app-status />
    <hr />
    <app-master />
    <hr />
    <app-color-message />
  `,
})
export class App {}
