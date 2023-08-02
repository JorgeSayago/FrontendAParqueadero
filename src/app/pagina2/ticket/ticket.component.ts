import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { LugarService } from 'src/app/services/lugar.service';
import { SitioService } from 'src/app/services/sitio.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  ticket: Ticket = new Ticket();
  listadoLugaresWS:any;
  listadoSitiosWS:any;

  constructor(private lugarService: LugarService,private ticketService: TicketService,private sitioService: SitioService ,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.ticket = new Ticket();
      this.ticket = params['ticket']
    }
  
}

ngOnInit(): void {
  this.listadoLugaresWS = this.lugarService.getAll()
  this.listadoSitiosWS= this.sitioService.getAll();
}

guardar(){
  this.ticketService.save(this.ticket).subscribe(data => {
    console.log("Resultado WS SAVE", data);
    console.log(this.ticket)
  });
  this.ticket = new Ticket();
}
}
