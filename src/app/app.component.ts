import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoContainerComponent } from './todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portfolio';
}
