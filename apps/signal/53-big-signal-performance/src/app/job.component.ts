import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'job',
  standalone: true,
  template: `
    <div cd-flash class="m-4 block border border-gray-500 p-4">
      Job:
      <div>title: {{ title() }}</div>
      <div>salary: {{ salary() }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CDFlashingDirective],
})
export class JobComponent {
  title = input<string>('');
  salary = input<number>(0);
}
