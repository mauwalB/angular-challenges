/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextComponent } from './text.component';

export type StaticTextType = 'normal' | 'warning' | 'error';

@Component({
  selector: 'static-text',
  imports: [TextComponent],
  styles: [
    `
      :host-context(.error) {
        --text-color: red;
        --text-font-size: 30px;
      }
      :host-context(.warning) {
        --text-color: orange;
        --text-font-size: 25px;
      }
    `,
  ],
  template: `
    <text>This is a static text</text>
  `,
})
export class TextStaticComponent {}
