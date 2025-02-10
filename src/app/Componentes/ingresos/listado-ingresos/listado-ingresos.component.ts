import { Component, inject, Input, input } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { CommonModule } from '@angular/common';
import { DbService } from '../../../servicios/db.service';

@Component({
  selector: 'app-listado-ingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-ingresos.component.html',
  styleUrl: './listado-ingresos.component.css',
})
export class ListadoIngresosComponent {
  @Input() ingresos: Iingresos[] = [];

  servicio = inject(DbService);

  eliminar(id: string) {
    this.servicio.eliminar(id);
    alert('Eliminando Registro.....');
  }
  editar(ing: Iingresos) {}
}
