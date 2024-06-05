import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { getTodosMapper } from './get-todos.mapper';

@Injectable({
  providedIn: 'root',
})
export class GetTodosService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get('/todo/').pipe(map(getTodosMapper.mapToList));
  }
}
