import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  titleClass = 'red';
  placeholder = 'Enter your todo...';
  currentTodo = {
    title: '',
    percentDone: 0,
    date: new Date(Date.now()).toLocaleString(),
    highPriority: false,
  };
  todos: any = [];

  saveTodo() {
    if (this.currentTodo !== null) {
      this.todos.push({
        ...this.currentTodo,
        id: Symbol(),
      });
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
