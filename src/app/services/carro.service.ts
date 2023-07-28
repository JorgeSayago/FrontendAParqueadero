import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Carro } from '../domain/carro';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/AParqueaderoWS/rs/carros';

  guardarCarro(carro: Carro, cedula: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      carro: carro,
      cedula: cedula
    };
    return this.http.post<any>(this.apiUrl, body, { headers: headers })
  }

}
