import { inject } from '@angular/core';
import { Role } from './user.model';
import { UserStore } from './user.store';

export const hasRole = (permissions: Role[], userStore = inject(UserStore)) =>
  userStore.hasAnyRole(permissions);

export const isAdmin = (userStore = inject(UserStore)) => userStore.isAdmin();

export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter',
    canMatch: [() => isAdmin()],
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'enter',
    canMatch: [() => hasRole(['MANAGER'])],
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent,
      ),
  },
];
