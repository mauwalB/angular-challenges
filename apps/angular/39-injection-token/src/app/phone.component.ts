import { Component } from '@angular/core';
import { PHONE_TIMER, provideTimer } from './data';
import { TimerContainerComponent } from './timer-container.component';

@Component({
  selector: 'app-phone',
  imports: [TimerContainerComponent],
  providers: [provideTimer(PHONE_TIMER)],
  template: `
    <div class="flex gap-2">
      Phone Call Timer:
      <p class="italic">(should be 2000s)</p>
    </div>
    <timer-container />
  `,
})
export default class PhoneComponent {}
