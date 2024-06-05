import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

import { LoaderService } from '@shared/services';

import {
  ButtonComponent,
  LinkComponent,
  LoaderComponent,
} from '@shared/components';

import { DeleteTodoService } from '../../../todo-delete/model/delete-todo.service';
import { GetTodosService } from '../../model/get-todos.service';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import { ITodo } from '../../../shared/model/todo.types';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [ButtonComponent, LinkComponent, TodoCardComponent, LoaderComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(
    private destroyRef: DestroyRef,
    private getTodosService: GetTodosService,
    private deleteTodoService: DeleteTodoService,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loader.setLoading();
    this.getTodosService
      .getTodos()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loader.setLoaded())
      )
      .subscribe({
        next: todos => (this.todos = todos),
      });
  }

  handleDeleteTodo(todo: ITodo): void {
    this.loader.setLoading();
    this.deleteTodoService
      .deleteTodo(todo.id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loader.setLoaded())
      )
      .subscribe({
        next: () => {
          this.todos = this.todos.filter(item => item.id !== todo.id);
        },
      });
  }
}
