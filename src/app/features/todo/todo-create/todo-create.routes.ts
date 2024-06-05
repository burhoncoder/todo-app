import { Routes } from '@angular/router';

import { TodoCreatePageComponent } from './pages/todo-create-page/todo-create-page.component';

export const todoCreateRoutes: Routes = [
  {
    path: '',
    title: 'Todo Create',
    component: TodoCreatePageComponent,
  },
];
