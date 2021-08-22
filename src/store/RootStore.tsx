import { action, computed, makeAutoObservable } from 'mobx';
import { Todo } from './Todo';

export class RootStore {
  todoList: Array<Todo> = [];

  constructor(todoList: Array<Todo> = []) {
    this.todoList = todoList;
    makeAutoObservable(this, {
      activeCount: computed,
      completedCount: computed,
      find: action,
      add: action,
      delete: action,
      clearCompleted: action,
    });
  }

  get activeCount(): number {
    return this.todoList.filter((todo) => !todo.completed).length;
  }

  get completedCount(): number {
    return this.todoList.filter((todo) => todo.completed).length;
  }

  find(id: string): Todo | undefined {
    return this.todoList.find((e) => e.id === id);
  }

  add(todo: Todo): void {
    this.todoList.unshift(todo);
  }

  delete(todo: Todo): void {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  clearCompleted(): void {
    if (this.completedCount > 0) {
      const allCompleted = this.todoList.filter(
        (todo: Todo): boolean => todo.completed === true
      );
      allCompleted.forEach((todo: Todo) => this.delete(todo));
    }
  }
}
