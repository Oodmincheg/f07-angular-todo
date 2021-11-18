import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  titleClass = 'red';
  placeholder = 'Enter your todo...';
  inputValue = '';
  dateInputValue = '';
  todos: any = [];

  onSubmit() {
    this.todos.push({
      title: this.inputValue,
      data: this.dateInputValue,
      id: Symbol(),
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
