import { Pipe, PipeTransform } from '@angular/core';
import { PersonUtils } from './person.utils';

type PersonType = typeof PersonUtils;

@Pipe({
  name: 'wrapUtil',
})
export class WrapUtilPipe implements PipeTransform {
  transform<T extends keyof PersonType>(
    utility: T,
    ...args: Parameters<PersonType[T]>
  ): ReturnType<PersonType[T]> {
    const fn = PersonUtils[utility];
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (fn as Function)(...args);
  }
}
