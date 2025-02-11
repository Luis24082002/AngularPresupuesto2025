import { Component, inject, signal } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Igastos } from '../../interfaces/igastos';
import { FrmgastosComponent } from '../../Componentes/gastos/frmgastos/frmgastos.component';


@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [FrmgastosComponent], 
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent {
  gastos = signal<Igastos[]>([]);
  
  gastoParaEditar = signal<Igastos | null>(null);

  gastoServicio = inject(DbService);

  agregargasto(ingreso: Igastos) {
    this.gastoServicio.agregargasto({ ...ingreso });
    this.gastos.set(this.gastoServicio.getgasto());
  }

  editandolo(gastoEditado: Igastos) {
    this.gastoServicio.actualizargasto(gastoEditado);
    this.gastos.set(this.gastoServicio.getgasto());
  }

  eliminagasto(id: string) {
    this.gastoServicio.eliminar(id);
    this.gastos.set(this.gastoServicio.getgasto());
  }

  selecciongasto(gasto: Igastos) {
    this.gastoParaEditar.set(gasto);
  }
}
