import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo! : Todo

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todo = new Todo();
  }

  onSubmit(form : NgForm) : void {
    if (!form.valid) return;

    this.todoService.addTodo(this.todo);

    this.clear(form);
  }

  clear(form : NgForm) : void {
    this.todo = new Todo();

    form.reset();
  }

}
