import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITodo } from '../../../shared/model/todo.types';
import {
  ButtonComponent,
  LinkComponent,
  StatusComponent,
} from '@shared/components';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [LinkComponent, ButtonComponent, StatusComponent],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() todo!: ITodo;
  @Output() deleteTodo = new EventEmitter<ITodo>();

  handleDeleteTodo() {
    this.deleteTodo.emit(this.todo);
  }
}
