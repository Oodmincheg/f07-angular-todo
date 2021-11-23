import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './types';
const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private numbers = [1, 2, 3];
  //CRUD - create read update delete
  all() {
    return this.http.get(`${BASE_URL}todos`);
  }

  create(todo: Todo) {
    return this.http.post(`${BASE_URL}todos`, todo);
  }

  delete(todoId: number) {
    return this.http.delete(`${BASE_URL}todos/${todoId}`);
  }

  update(todo: Todo) {
    return this.http.put(`${BASE_URL}todos/${todo.id}`, todo);
  }

  constructor(private http: HttpClient) {}
}
