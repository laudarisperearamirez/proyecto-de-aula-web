import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteConsultaComponent } from './Hotel_Neruda/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './Hotel_Neruda/cliente-registro/cliente-registro.component';
import { EmpleadoRegistroComponent } from './Hotel_Neruda/empleado-registro/empleado-registro.component';
import { EmpleadoConsultaComponent } from './Hotel_Neruda/empleado-consulta/empleado-consulta.component';
import { HabitacionConsultaComponent } from './Hotel_Neruda/habitacion-consulta/habitacion-consulta.component';
import { HabitacionRegistroComponent } from './Hotel_Neruda/habitacion-registro/habitacion-registro.component';
import { ReservaConsultaComponent } from './Hotel_Neruda/reserva-consulta/reserva-consulta.component';
import { ReservaRegistroComponent } from './Hotel_Neruda/reserva-registro/reserva-registro.component';
import { IngresoRegistroComponent } from './Hotel_Neruda/ingreso-registro/ingreso-registro.component';
import { IngresoConsultaComponent } from './Hotel_Neruda/ingreso-consulta/ingreso-consulta.component';
import { AcompananteConsultaComponent } from './Hotel_Neruda/acompanante-consulta/acompanante-consulta.component';
import { AcompananteRegistroComponent } from './Hotel_Neruda/acompanante-registro/acompanante-registro.component';

const routes: Routes = [
  {
    path: 'clienteConsulta',
    component: ClienteConsultaComponent
  },
  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent
  },
  {
    path: 'empleadoRegistro',
    component: EmpleadoRegistroComponent
  }
  ,
  {
    path: 'empleadoConsulta',
    component: EmpleadoConsultaComponent
  }
  ,
  {
    path: 'habitacionConsulta',
    component: HabitacionConsultaComponent
  }
  ,
  {
    path: 'habitacionRegistro',
    component: HabitacionRegistroComponent
  }
  ,
  {
    path: 'reservaConsulta',
    component: ReservaConsultaComponent
  }
  ,
  {
    path: 'reservaRegistro',
    component: ReservaRegistroComponent
  },
  {
    path: 'ingresoRegistro',
    component: IngresoRegistroComponent
  },
  {
    path: 'ingresoConsulta',
    component: IngresoConsultaComponent
  },
  {
    path: 'ingresoConsulta',
    component: IngresoConsultaComponent
  },
  {
    path: 'acompananteConsulta',
    component: AcompananteConsultaComponent
  },
  {
    path: 'acompananteRegistro',
    component: AcompananteRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
