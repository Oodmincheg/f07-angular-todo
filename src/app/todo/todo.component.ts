import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.resetCurrentTodo();
    this.todosService.all().subscribe((todos: any) => (this.todos = todos));
  }

  titleClass = 'red';
  placeholder = 'Enter your todo...';
  currentTodo: any;
  todos: any = [];

  resetCurrentTodo() {
    this.currentTodo = {
      title: '',
      percentDone: 0,
      date: new Date(Date.now()).toLocaleString(),
      highPriority: false,
    };
  }

  saveTodo() {
    if (!this.currentTodo.id) {
      this.todosService
        .create(this.currentTodo)
        .subscribe(() =>
          this.todosService
            .all()
            .subscribe((todos: any) => (this.todos = todos)),
        );
    } else {
      this.todosService.update(this.currentTodo);
    }
    this.resetCurrentTodo();
  }

  selectTodo(todo: any) {
    this.currentTodo = { ...todo };
  }
}
