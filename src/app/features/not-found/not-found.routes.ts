import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const notFoundRoutes: Routes = [
  {
    path: '**',
    title: 'Not Found Page',
    component: NotFoundPageComponent,
  },
];
