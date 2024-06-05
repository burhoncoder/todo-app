import { Routes } from '@angular/router';

import { protectedRouteGuard } from '@shared/guards';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'todos',
    canActivate: [protectedRouteGuard],
    loadChildren: () =>
      import('./features/todo/todo.module').then(m => m.TodoModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos/list',
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        m => m.NotFoundModule
      ),
  },
];
