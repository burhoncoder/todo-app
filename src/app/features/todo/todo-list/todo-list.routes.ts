import { Routes } from '@angular/router';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';

export const todoListRoutes: Routes = [
  {
    path: '',
    title: 'Todo List',
    component: TodoPageComponent,
  },
];
