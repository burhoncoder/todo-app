import { Component } from '@angular/core';

import { TodoCreateFormComponent } from '../../components/todo-create-form/todo-create-form.component';

@Component({
  selector: 'app-todo-create-page',
  standalone: true,
  imports: [TodoCreateFormComponent],
  templateUrl: './todo-create-page.component.html',
  styleUrl: './todo-create-page.component.scss',
})
export class TodoCreatePageComponent {}
