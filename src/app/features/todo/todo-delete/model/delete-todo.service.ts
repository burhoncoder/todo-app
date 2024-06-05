import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteTodoService {
  constructor(private httpClient: HttpClient) {}

  deleteTodo(id: string) {
    return this.httpClient.delete(`/todo/${id}/`);
  }
}
