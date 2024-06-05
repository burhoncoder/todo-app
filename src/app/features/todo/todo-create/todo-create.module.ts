import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { todoCreateRoutes } from './todo-create.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoCreateRoutes)],
})
export class TodoCreateModule {}
