import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lugar } from 'src/app/domain/lugar';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  listadoLugaresWS:any;
  listadoLugares : Lugar[] = []

  constructor(private lugarService: LugarService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
    }
  
}

ngOnInit(): void {
  this.listadoLugaresWS = this.lugarService.getAll()
}
}
