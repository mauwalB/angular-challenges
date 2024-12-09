import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Address } from './user.service';

@Component({
  selector: 'address-user',
  standalone: true,
  template: `
    <div cd-flash class="m-4 block border border-gray-500 p-4">
      Address:
      <div>Street: {{ street() }}</div>
      <div>ZipCode: {{ zipCode() }}</div>
      <div>City: {{ city() }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CDFlashingDirective],
})
export class AddressComponent {
  address = input<Address>({ street: '', zipCode: '', city: '' });

  street = computed(() => this.address()?.street ?? '');
  zipCode = computed(() => this.address()?.zipCode ?? '');
  city = computed(() => this.address()?.city ?? '');
}
