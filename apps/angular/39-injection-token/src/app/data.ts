import { InjectionToken } from '@angular/core';

export const DEFAULT_TIMER = 1000;
export const PHONE_TIMER = 2000;

export const TIMER = new InjectionToken<number>('timer');

export const provideTimer = (timer: number = DEFAULT_TIMER) => ({
  provide: TIMER,
  useFactory: () => timer,
});
