import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];

  _searchText: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
    this.filteredTodos = this.todos;
  }

  deleteTodo(todo: Todo): void {
    this.todoService.delete(todo);
  }

  get searchText() {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;

    this.filteredTodos = this.filterTodos(value);
  }

  filterTodos(value : string): Todo[] {
    if (value == '') this.filteredTodos = this.todos;

    return this.filteredTodos
      .filter(todo => todo.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

}
