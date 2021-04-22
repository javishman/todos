import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/todo-mocks';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() : Todo[] {
    return TODOS;
  }
}
