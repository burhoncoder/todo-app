import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { todoSingleRoutes } from './todo-single.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoSingleRoutes)],
})
export class TodoSingleModule {}
