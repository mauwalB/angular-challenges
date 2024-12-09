import { computed, Injectable, signal } from '@angular/core';

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

@Injectable({ providedIn: 'root' })
export class UserStore {
  user = signal({
    name: 'Bob',
    address: {
      street: '',
      zipCode: '',
      city: '',
    },
    note: '',
    title: '',
    salary: 0,
  });

  address = computed(() => this.user().address);
  name = computed(() => this.user().name);
  note = computed(() => this.user().note);
  title = computed(() => this.user().title);
  salary = computed(() => this.user().salary);
}
