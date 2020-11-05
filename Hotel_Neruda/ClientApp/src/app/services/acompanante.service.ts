import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Acompanante } from '../Hotel_Neruda/models/acompanante';

@Injectable({
  providedIn: 'root'
})
export class AcompananteService {
  baseUrl: string;
 

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl; }


  get(): Observable<Acompanante[]> {
    return this.http.get<Acompanante[]>(this.baseUrl + 'api/AcompananteControllers')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Acompanante[]>('Consulta Acompañante', null))
      );

  }

  post(acompanante: Acompanante): Observable<Acompanante> {
    return this.http.post<Acompanante>(this.baseUrl + 'api/AcompananteControllers', acompanante)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Acompanante>('Registrar Acompañante', null))
      );

  }
}
