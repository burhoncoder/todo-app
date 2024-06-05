import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { notFoundRoutes } from './not-found.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(notFoundRoutes)],
})
export class NotFoundModule {}
