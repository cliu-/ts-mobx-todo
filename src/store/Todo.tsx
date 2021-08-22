import * as UUID from 'short-uuid';
import { makeAutoObservable } from 'mobx';

export class Todo {
  id = '';
  bodyText = '';
  completed = false;

  constructor(bodyText: string, completed = false) {
    this.id = UUID.generate();
    this.bodyText = bodyText;
    this.completed = completed;
    makeAutoObservable(this);
  }

  updateText(newText: string): void {
    this.bodyText = newText;
  }

  toggleCompleted(): void {
    this.completed = !this.completed;
  }

  complete(): void {
    this.completed = true;
  }

  active(): void {
    this.completed = false;
  }
}
