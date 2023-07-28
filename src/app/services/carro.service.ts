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

  saveC(placa: string, cedula: string) {
    const url = 'http://localhost:8080/demo/rs/clientes/addCarro';
    const body = { placa: placa, cedula: cedula }; // Crear un objeto con los campos placa y cedula
    return this.http.put<any>(url, body); // Enviar una solicitud PUT con el objeto body
  }

  
}
