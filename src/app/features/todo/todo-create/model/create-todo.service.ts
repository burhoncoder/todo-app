import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BrowserStorageService } from '@shared/services';

import { ICreateTodoForm } from './create-todo.types';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoService {
  constructor(
    private httpClient: HttpClient,
    private browserStorage: BrowserStorageService
  ) {}

  createTodo(form: ICreateTodoForm) {
    return this.httpClient.post('/todo/', {
      ...form,
      user: this.browserStorage.getUserId(),
    });
  }
}
