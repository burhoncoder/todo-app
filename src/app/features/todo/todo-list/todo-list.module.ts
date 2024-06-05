import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { todoListRoutes } from './todo-list.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoListRoutes)],
})
export class TodoListModule {}
