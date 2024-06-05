import { Routes } from '@angular/router';

import { TodoSignlePageComponent } from './pages/todo-signle-page/todo-signle-page.component';

export const todoSingleRoutes: Routes = [
  {
    path: ':id',
    title: route => `Todo Single by id ${route.paramMap.get('id')}`,
    component: TodoSignlePageComponent,
  },
];
