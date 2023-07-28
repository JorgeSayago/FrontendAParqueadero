import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) {}

  save(persona: Persona) {
    return this.http.post<any>("http://localhost:8080/AParqueaderoWS/rs/clientes", persona)
  }

}
