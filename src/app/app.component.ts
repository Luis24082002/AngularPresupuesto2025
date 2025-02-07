import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Finanzas2025';
}
