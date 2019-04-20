import { bindable } from 'aurelia-framework';

export class ColorComponent {
  message = 'Hello';

  @bindable color = 'red';

  @bindable setColor;
}
