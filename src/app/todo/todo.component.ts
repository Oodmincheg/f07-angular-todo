import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/types';

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
  currentTodo: Todo = {};
  todos: Todo[] = [];
  a: object = { b: 7, c: 8 };

  resetCurrentTodo() {
    const emptyTodo: Todo = {
      title: '',
      percentDone: 0,
      date: new Date(Date.now()).toLocaleString(),
      highPriority: false,
    };

    this.currentTodo = emptyTodo;
  }

  saveTodo() {
    if (!this.currentTodo.id) {
      this.todosService
        .create(this.currentTodo)
        .subscribe(() => this.loadTodos());
    } else {
      this.todosService
        .update(this.currentTodo)
        .subscribe(() => this.loadTodos());
    }
    this.resetCurrentTodo();
  }

  loadTodos(): void {
    this.todosService.all().subscribe((todos: any) => (this.todos = todos));
  }

  deleteTodo(todoId: number | undefined, e: any): void {
    console.log(e);
    if (!todoId) return;
    this.todosService.delete(todoId).subscribe(() => this.loadTodos());
  }

  selectTodo(todo: Todo): void {
    this.currentTodo = { ...todo };
  }
}
