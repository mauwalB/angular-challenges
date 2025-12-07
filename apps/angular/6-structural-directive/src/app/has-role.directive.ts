import {
  computed,
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Role } from './user.model';
import { UserStore } from './user.store';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[hasRole], [hasSuperAdminRole]',
})
export class HasRoleDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private store = inject(UserStore);

  hasRole = input<Role | Role[] | undefined>(undefined);
  hasSuperAdminRole = input<boolean>(false);

  private roleArray = computed(() => {
    const role = this.hasRole();
    if (!role) return [];
    return Array.isArray(role) ? role : [role];
  });

  private hasRoleInUser = computed(() => {
    const role = this.roleArray();
    if (this.hasSuperAdminRole()) return this.store.isAdmin();
    return this.store.hasAnyRole(role);
  });

  constructor() {
    effect(() => {
      if (this.hasRoleInUser()) {
        this.addTemplate();
      } else {
        this.clearTemplate();
      }
    });
  }

  clearTemplate() {
    this.viewContainerRef.clear();
  }

  addTemplate() {
    this.clearTemplate();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {});
  }
}
