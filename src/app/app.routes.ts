import { RouterLinkWithHref, Routes } from '@angular/router';
import { IngresosComponent } from './Paginas/ingresos/ingresos.component';
import { GastosComponent } from './Paginas/gastos/gastos.component';
import { InformesComponent } from './Paginas/informes/informes.component';

export const routes: Routes = [
  { path: 'ingresos', component: IngresosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'informes', component: InformesComponent } 
];
