import { Component, Input } from '@angular/core';
import { ITodoItem } from '../types/types';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoItem?: ITodoItem;

}
