import { Routes } from '@angular/router';

export const todoRoutes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then(m => m.TodoListModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./todo-create/todo-create.module').then(m => m.TodoCreateModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./todo-update/todo-update.module').then(m => m.TodoUpdateModule),
  },
  {
    path: 'single',
    loadChildren: () =>
      import('./todo-single/todo-single.module').then(m => m.TodoSingleModule),
  },
];
