import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BrowserStorageService } from '@shared/services';

import { IUpdateTodoForm } from './update-todo.types';

@Injectable({
  providedIn: 'root',
})
export class UpdateTodoService {
  constructor(
    private httpClient: HttpClient,
    private browserStorage: BrowserStorageService
  ) {}

  updateTodo(id: string, dto: IUpdateTodoForm) {
    return this.httpClient.put(`/todo/${id}/`, {
      ...dto,
      user: this.browserStorage.getUserId(),
    });
  }
}
