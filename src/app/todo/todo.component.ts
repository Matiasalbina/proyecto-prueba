import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Importa esto

@Component({
  selector: 'app-todo',
  standalone: true, // 👈 IMPORTANTE en standalone
  imports: [FormsModule], // 👈 Dile qué módulos usa
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class TodoComponent {
  tareas: string[] = [];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
