import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import{ClienteService}from'./services/cliente.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteRegistroComponent } from './Hotel_Neruda/cliente-registro/cliente-registro.component';
import { ClienteConsultaComponent } from './Hotel_Neruda/cliente-consulta/cliente-consulta.component';
import { EmpleadoConsultaComponent } from './Hotel_Neruda/empleado-consulta/empleado-consulta.component';
import { EmpleadoRegistroComponent } from './Hotel_Neruda/empleado-registro/empleado-registro.component';
import { HabitacionConsultaComponent } from './Hotel_Neruda/habitacion-consulta/habitacion-consulta.component';
import { HabitacionRegistroComponent } from './Hotel_Neruda/habitacion-registro/habitacion-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservaRegistroComponent } from './Hotel_Neruda/reserva-registro/reserva-registro.component';
import { ReservaConsultaComponent } from './Hotel_Neruda/reserva-consulta/reserva-consulta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroHabitacionPipe } from './pipe/filtro-habitacion.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { IngresoRegistroComponent } from './Hotel_Neruda/ingreso-registro/ingreso-registro.component';
import { IngresoConsultaComponent } from './Hotel_Neruda/ingreso-consulta/ingreso-consulta.component';
import { AcompananteRegistroComponent } from './Hotel_Neruda/acompanante-registro/acompanante-registro.component';
import { AcompananteConsultaComponent } from './Hotel_Neruda/acompanante-consulta/acompanante-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteRegistroComponent,
    ClienteConsultaComponent,
    EmpleadoConsultaComponent,
    EmpleadoRegistroComponent,
    HabitacionConsultaComponent,
    HabitacionRegistroComponent,
    HeaderComponent,
    FooterComponent,
    ReservaRegistroComponent,
    ReservaConsultaComponent,
    FiltroHabitacionPipe,
    AlertModalComponent,
    IngresoRegistroComponent,
    IngresoConsultaComponent,
    AcompananteRegistroComponent,
    AcompananteConsultaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    NgbModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
