import { Injectable, signal } from '@angular/core';
import { Iingresos } from '../interfaces/iingresos';
import { Igastos } from '../interfaces/igastos';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private static ingresos = signal<Iingresos[]>([]);
  private static gastos = signal<Igastos[]>([]);

  agregargasto(arg0: Igastos) {
    const aux = [...DbService.gastos(), arg0];

    DbService.gastos.set(aux);
  }

  actualizargasto(gastoEditado: Igastos) {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  getIngresos(): Iingresos[] {
    return DbService.ingresos();
  }
  getgasto(): Igastos[] {
    return DbService.gastos();
  }

  agregarIngreso(ingreso: Iingresos) {
    const id = DbService.ingresos().length
      ? (
          Math.max(...DbService.ingresos().map((i) => parseInt(i.id))) + 1
        ).toString()
      : '1';
    const aux = { ...ingreso, id };
    const aux2 = [...DbService.ingresos(), aux];
    DbService.ingresos.set(aux2);
  }
  eliminar(id: string) {
    const aux = DbService.ingresos().filter((i) => i.id !== id);
    DbService.ingresos.set(aux);
  }
  actualizarIngreso(ingreso: Iingresos) {
    const aux = DbService.ingresos().map((ing) =>
      ing.id == ingreso.id ? ingreso : ing
    );
    DbService.ingresos.set(aux);
  }
}
