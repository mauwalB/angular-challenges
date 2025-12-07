/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextStaticComponent } from './static-text.component';
import { TextComponent } from './text.component';

@Component({
  selector: 'page',
  imports: [TextStaticComponent, TextComponent],
  styles: [
    `
      text {
        --text-color: blue;
        --text-font-size: 15px;
      }
    `,
  ],
  template: `
    <static-text></static-text>
    <static-text class="error"></static-text>
    <static-text class="warning"></static-text>
    <text>This is a blue text</text>
  `,
})
export class PageComponent {}
