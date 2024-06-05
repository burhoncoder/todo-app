import { Component, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';

import { LoaderService } from '@shared/services';

import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
} from '@shared/components';

import { CreateTodoService } from '../../model/create-todo.service';
import { ICreateTodoForm } from '../../model/create-todo.types';

@Component({
  selector: 'app-todo-create-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    InputComponent,
    CheckboxComponent,
  ],
  templateUrl: './todo-create-form.component.html',
  styleUrl: './todo-create-form.component.scss',
})
export class TodoCreateFormComponent {
  todoCreateForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    completed: [false, Validators.required],
  });

  constructor(
    private destroyRef: DestroyRef,
    private formBuilder: FormBuilder,
    private createTodoService: CreateTodoService,
    private router: Router,
    public loader: LoaderService
  ) {}

  handleCreateTodo(): void {
    const formValue: ICreateTodoForm = this.todoCreateForm.value;
    this.loader.setLoading();
    this.createTodoService
      .createTodo(formValue)
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
