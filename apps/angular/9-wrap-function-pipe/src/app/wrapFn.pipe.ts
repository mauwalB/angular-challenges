import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
})
export class WrapFnPipe<T, R> implements PipeTransform {
  transform(func: (a: T, b: R) => string, a: T, b: R): string {
    return func(a, b);
  }
}
