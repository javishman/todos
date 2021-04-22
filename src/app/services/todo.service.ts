import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/todo-mocks';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {  

  constructor() { }

  addTodo(todo: Todo) : void {
    todo.id = TODOS.length + 1;

    TODOS.push(todo);
  }

  getTodos() : Todo[] {
    return TODOS;
  }

  delete(todo : Todo) : void {
    let indexOf = TODOS.indexOf(todo);

    if (indexOf == -1) return ;

    TODOS.splice(indexOf, 1);
  }
}
