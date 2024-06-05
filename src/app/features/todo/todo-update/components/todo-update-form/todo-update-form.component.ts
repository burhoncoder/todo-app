import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

import { LoaderService } from '@shared/services';

import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  LoaderComponent,
} from '@shared/components';

import { GetTodoService } from '../../../todo-single/model/get-todo.service';
import { UpdateTodoService } from '../../model/update-todo.service';
import { IUpdateTodoForm } from '../../model/update-todo.types';

@Component({
  selector: 'app-todo-update-form',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './todo-update-form.component.html',
  styleUrl: './todo-update-form.component.scss',
})
export class TodoUpdateFormComponent implements OnInit {
  @Input() todoId!: string;

  todoUpdateForm!: FormGroup;

  constructor(
    private destroyRef: DestroyRef,
    private router: Router,
    private formBuilder: FormBuilder,
    private updateTodoService: UpdateTodoService,
    private getTodoService: GetTodoService,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getTodoService
      .getTodo(this.todoId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: todo => {
          this.todoUpdateForm = this.formBuilder.group({
            title: [todo.title, Validators.required],
            completed: [todo.completed, Validators.required],
          });
        },
      });
  }

  handleUpdateTodo(): void {
    this.loader.setLoading();
    const formValue: IUpdateTodoForm = this.todoUpdateForm.value;

    this.updateTodoService
      .updateTodo(this.todoId, formValue)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loader.setLoaded())
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/todos', 'list']);
        },
      });
  }
}
