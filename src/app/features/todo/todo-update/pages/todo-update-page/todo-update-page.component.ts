import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoUpdateFormComponent } from '../../components/todo-update-form/todo-update-form.component';

@Component({
  selector: 'app-todo-update-page',
  standalone: true,
  imports: [TodoUpdateFormComponent],
  templateUrl: './todo-update-page.component.html',
  styleUrl: './todo-update-page.component.scss',
})
export class TodoUpdatePageComponent {
  todoId: string;
  constructor(public route: ActivatedRoute) {
    this.todoId = route.snapshot.params['id'];
  }
}
