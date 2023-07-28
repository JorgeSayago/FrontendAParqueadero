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

  save(carro: Carro) {
    return this.http.post<any>("http://localhost:8080/AParqueaderoWS/rs/clientes/carroG", carro)
  }
}
