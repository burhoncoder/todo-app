import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

import { LoaderService } from '@shared/services';

import { GetTodoService } from '../../model/get-todo.service';
import { ITodo } from '../../../shared/model/todo.types';
import { LoaderComponent, StatusComponent } from '@shared/components';

@Component({
  selector: 'app-todo-info',
  standalone: true,
  imports: [LoaderComponent, StatusComponent],
  templateUrl: './todo-info.component.html',
  styleUrl: './todo-info.component.scss',
})
export class TodoInfoComponent implements OnInit {
  @Input() todoId!: string;
  todo!: ITodo;

  constructor(
    private destroyRef: DestroyRef,
    private getTodoService: GetTodoService,
    public loader: LoaderService
  ) {}

  ngOnInit() {
    this.loader.setLoading();
    this.getTodoService
      .getTodo(this.todoId)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loader.setLoaded())
      )
      .subscribe({
        next: todo => {
          this.todo = todo;
        },
      });
  }
}
