import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoInfoComponent } from '../../components/todo-info/todo-info.component';

@Component({
  selector: 'app-todo-signle-page',
  standalone: true,
  imports: [TodoInfoComponent],
  templateUrl: './todo-signle-page.component.html',
  styleUrl: './todo-signle-page.component.scss',
})
export class TodoSignlePageComponent {
  todoId: string;
  constructor(public route: ActivatedRoute) {
    this.todoId = route.snapshot.params['id'];
  }
}
