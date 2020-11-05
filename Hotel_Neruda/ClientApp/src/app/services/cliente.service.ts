import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Cliente } from './../Hotel_Neruda/models/cliente';
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
}) export class ClienteService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'api/ClienteControllers')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente[]>('Consulta Cliente', null))
      );

  }

  /** GET cliente by identificacion. Will 404 if id not found */
  getId(id: string): Observable<Cliente> {
    const url = `${this.baseUrl + 'api/ClienteControllers'}/${id}`;
    return this.http.get<Cliente>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Cliente>('Buscar Cliente', null))
      );
  }

  post(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl + 'api/ClienteControllers', cliente)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente>('Registrar Cliente', null))
      );

  }
}
