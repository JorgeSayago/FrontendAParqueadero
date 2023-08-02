import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LisTickets } from 'src/app/domain/lisTickets';
import { ListicketService } from 'src/app/services/listicket.service';

@Component({
  selector: 'app-listicket',
  templateUrl: './listicket.component.html',
  styleUrls: ['./listicket.component.scss']
})
export class ListicketComponent {

  lisTickets : LisTickets = new LisTickets();

  listadoTicketsWS:any;

  constructor(private lisTiService: ListicketService, private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
    }
  
}

ngOnInit(): void {
  this.listadoTicketsWS = this.lisTiService.getAll()
}
}
