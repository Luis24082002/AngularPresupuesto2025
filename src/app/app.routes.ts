import { RouterLinkWithHref, Routes } from '@angular/router';
import { IngresosComponent } from './Paginas/ingresos/ingresos.component';
import { GastosComponent } from './Paginas/gastos/gastos.component';


export const routes: Routes = [
  { path: 'ingresos', component: IngresosComponent },
  { path: 'gastos', component: GastosComponent },
  
];
