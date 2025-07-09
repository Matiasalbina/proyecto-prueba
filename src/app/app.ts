import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent], // 👈 importa tu componente aquí
  templateUrl: './app.html',
})
export class AppComponent {}
