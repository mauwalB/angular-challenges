import { computed, Injectable, signal } from '@angular/core';
import { Role, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private userStore = signal<User | undefined>(undefined);
  user = computed(() => this.userStore());
  isAdmin = computed(() => this.user()?.isAdmin);

  add(user: User) {
    this.userStore.set(user);
  }

  hasAnyRole(roles: Role[]) {
    return this.user()?.roles.some((r) => roles.includes(r));
  }
}
