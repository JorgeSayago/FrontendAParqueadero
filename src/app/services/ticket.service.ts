import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  save(ticket: Ticket) {
    return this.http.post<any>("http://localhost:8080/AParqueaderoWS/rs/tickets", ticket)

  }
}
