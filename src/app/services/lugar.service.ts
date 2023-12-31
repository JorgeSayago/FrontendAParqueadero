import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get<any>("http://localhost:8080/AParqueaderoWS/rs/lugares/all")
  }
}
