import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  //CRUD - create read update delete
  all() {
    return this.http.get(`${BASE_URL}todos`);
  }

  create(todo: any) {
    // this.todos.push({ ...todo, id: Symbol() });
    return this.http.post(`${BASE_URL}todos`, todo);
  }

  delete() {}

  update(todoToUpdate: any) {
    // let updatedTodo = this.todos.find(
    //   (todo: any) => todo.id === todoToUpdate.id,
    // );
    // updatedTodo = todoToUpdate;
    // this.todos = this.todos.map((todo) => {
    //   if (todo.id !== todoToUpdate.id) return todo;
    //   else return todoToUpdate;
    // });
  }
  constructor(private http: HttpClient) {}
}
