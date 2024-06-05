import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { todoUpdateRoutes } from './todo-update.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoUpdateRoutes)],
})
export class TodoUpdateModule {}
