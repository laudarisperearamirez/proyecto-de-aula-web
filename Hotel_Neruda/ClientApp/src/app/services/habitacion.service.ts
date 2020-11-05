import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Habitacion } from '../Hotel_Neruda/models/habitacion';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  baseUrl: string;

  constructor(

    private http: HttpClient,

    @Inject('BASE_URL') baseUrl: string,

    private handleErrorService: HandleHttpErrorService) {

    this.baseUrl = baseUrl;

  }

  get(): Observable<Habitacion[]> {

    return this.http.get<Habitacion[]>(this.baseUrl + 'api/HabitacionControllers')

      .pipe(

        tap(_ => this.handleErrorService.log('datos enviados')),

        catchError(this.handleErrorService.handleError<Habitacion[]>('Consulta Habitacion', null))

      );

  }

  /** GET Habitacion by identificacion. Will 404 if id not found */
  getId(id: string): Observable<Habitacion> {
    const url = `${this.baseUrl + 'api/Habitacion'}/${id}`;
      return this.http.get<Habitacion>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Habitacion>('Buscar Habitacion', null))
      );
  }

  post(habitacion: Habitacion): Observable<Habitacion> {

    return this.http.post<Habitacion>(this.baseUrl + 'api/HabitacionControllers', habitacion)

      .pipe(

        tap(_ => this.handleErrorService.log('datos enviados')),

        catchError(this.handleErrorService.handleError<Habitacion>('Registrar Habitacion', null))

      );

  }
}
