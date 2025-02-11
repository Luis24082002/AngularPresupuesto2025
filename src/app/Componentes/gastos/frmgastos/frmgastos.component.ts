import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Igastos } from '../../../interfaces/igastos';

@Component({
  selector: 'app-frmgastos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './frmgastos.component.html',
  styleUrls: ['./frmgastos.component.css'],
})
export class FrmgastosComponent {
  eliminar(id: string) {
    throw new Error('Method not implemented.');
  }
  editar(gasto: Igastos) {
    throw new Error('Method not implemented.');
  }
  @Input() gastoParaEditar: Igastos | null = null;
  @Output() gastoAgregado = new EventEmitter<Igastos>();
  @Output() editame = new EventEmitter<Igastos>();
  @Input() gastos: Igastos[] = [];

  nuevogasto: Igastos = {
    id: '',
    ingresoid: '',
    descripcion: '',
    fecha: '',
    monto: 0,
  };

  ngOnChanges() {
    if (this.gastoParaEditar) {
      this.nuevogasto = { ...this.gastoParaEditar };
    }
  }

  agregarGasto() {
    if (!this.nuevogasto.id) {
      this.gastoAgregado.emit({ ...this.nuevogasto });
      alert('Gasto agregado');
    } else {
      this.editame.emit({ ...this.nuevogasto });
    }
    this.limpiar();
  }

  limpiar() {
    this.nuevogasto = {
      id: '',
      ingresoid: '',
      descripcion: '',
      fecha: '',
      monto: 0,
    };
  }
}
