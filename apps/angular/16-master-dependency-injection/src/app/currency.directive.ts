import { Directive, effect, inject, input } from '@angular/core';
import { CurrencyCode, CurrencyService } from './currency.service';

@Directive({
  selector: '[code]',
  providers: [CurrencyService],
})
export class CurrencyDirective {
  currencyService = inject(CurrencyService);

  code = input.required<CurrencyCode>();

  constructor() {
    effect(() => {
      const code = this.code();
      this.currencyService.setState({ code });
    });
  }
}
