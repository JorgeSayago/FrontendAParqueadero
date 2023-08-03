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
  getAll(){
    return this.http.get<any>("http://localhost:8080/AParqueaderoWS/rs/clientes/all");
   }

   delete(Persona: Persona){
    const url = 'http://localhost:8080/AParqueaderoWS/rs/clientes';
  return this.http.delete(url, { body: Persona });
  }

  update(Persona: Persona) {
    const url = 'http://localhost:8080/AParqueaderoWS/rs/clientes';
    return this.http.put(url, Persona);
  }
}
