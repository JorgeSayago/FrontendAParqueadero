import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Carro } from 'src/app/domain/carro';
import { LugarParqueo } from 'src/app/domain/lugarParqueo';
import { Persona } from 'src/app/domain/persona';
=======
import { Lugar } from 'src/app/domain/lugar';
>>>>>>> parent of 0e1d134 (Configuracion)
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
<<<<<<< HEAD
  persona: Persona=new Persona();
  carro: Carro=new Carro();
  lugarParqueo: LugarParqueo= new LugarParqueo();


=======
  placa: String = '';
>>>>>>> parent of 0e1d134 (Configuracion)
  listadoLugaresWS:any;
  listadoLugares : LugarParqueo[] = []

  constructor(private lugarService: LugarService,private ticketService: TicketService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.ticket = new Ticket();
      this.ticket = params['ticket']
    }
  
}

ngOnInit(): void {
  this.listadoLugaresWS = this.lugarService.getAll()
}

guardar(){
<<<<<<< HEAD
//  console.log(this.placa)
//  console.log(this.cedula)
 // console.log(this.codigo)
 // console.log(this.lugar)
 this.ticket.persona=this.persona;
 this.ticket.carro=this.carro;
 this.ticket.lugarParqueo=this.lugarParqueo;
=======
>>>>>>> parent of 0e1d134 (Configuracion)
  this.ticketService.save(this.ticket).subscribe(data => {
    console.log("Resultado WS SAVE", data);
  });
  this.ticket = new Ticket();
  this.placa='';


}


}
