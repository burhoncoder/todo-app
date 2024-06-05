import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { todoRoutes } from './todo.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
})
export class TodoModule {}
