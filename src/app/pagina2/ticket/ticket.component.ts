import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/domain/carro';
import { Lugar } from 'src/app/domain/lugar';
import { Ticket } from 'src/app/domain/ticket';
import { LugarService } from 'src/app/services/lugar.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  ticket: Ticket = new Ticket();
  placa:String = "";
  cedula: String = "";
  numeroTicket: string ="";
  lugar:number=0;

  listadoLugaresWS:any;
  listadoLugares : Lugar[] = []

  constructor(private lugarService: LugarService,private ticketService: TicketService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.ticket = new Ticket();
      this.ticket = params['ticket']
      console.log(this.ticket)
    }
  
}

ngOnInit(): void {
  this.listadoLugaresWS = this.lugarService.getAll()
}

guardar(){
  console.log(this.placa)
  console.log(this.cedula)
  console.log(this.numeroTicket)
  console.log(this.lugar)
  this.ticketService.save(this.ticket).subscribe(data => {
    console.log("resultado WS save", data);
    console.log(this.ticket)
    //this.router.navigate(['pagina1/Listar'])
  });
  this.ticket = new Ticket()
  alert("Contacto creado exitosamente")
}
}
