import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ITodoItem } from '../types/types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-container',
  imports: [TodoItemComponent, FormsModule, CommonModule],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent {
  todoItems: ITodoItem[] = [];
  currentTaskName: string = "";

  addTodoItem(){
    if (this.currentTaskName.trim() === "") return;

    this.todoItems.push({
      id: this.todoItems.length + 1
      ,name: this.currentTaskName
      ,completed: false
    });

    this.currentTaskName = "";
  }
}
