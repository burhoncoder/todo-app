import { Routes } from '@angular/router';

import { TodoUpdatePageComponent } from './pages/todo-update-page/todo-update-page.component';

export const todoUpdateRoutes: Routes = [
  {
    path: ':id',
    title: route => `Update Todo by id ${route.paramMap.get('id')}`,
    component: TodoUpdatePageComponent,
  },
];
