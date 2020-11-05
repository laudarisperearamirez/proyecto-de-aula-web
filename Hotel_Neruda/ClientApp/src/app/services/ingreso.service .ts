import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Ingreso } from './../Hotel_Neruda/models/ingreso';
import { tap, catchError } from 'rxjs/operators';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
}) export class IngresoService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(this.baseUrl + 'api/IngresoControllers')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Ingreso[]>('Consulta Ingreso', null))
      );

  }

  /** GET cliente by identificacion. Will 404 if id not found */
  getId(id: string): Observable<Ingreso> {
    const url = `${this.baseUrl + 'api/IngresoControllers'}/${id}`;
    return this.http.get<Ingreso>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Ingreso>('Buscar Ingreso', null))
      );
  }

  post(ingreso: Ingreso): Observable<Ingreso> {
    return this.http.post<Ingreso>(this.baseUrl + 'api/IngresoControllers', ingreso)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Ingreso>('Registrar Ingreso', null))
      );

  }
}
