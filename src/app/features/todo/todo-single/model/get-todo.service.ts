import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { getTodoMapper } from './get-todo.mapper';

@Injectable({
  providedIn: 'root',
})
export class GetTodoService {
  constructor(private httpClient: HttpClient) {}

  getTodo(id: string) {
    return this.httpClient
      .get(`/todo/${id}`)
      .pipe(map(getTodoMapper.mapToSingle));
  }
}
