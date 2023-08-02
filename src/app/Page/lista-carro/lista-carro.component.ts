import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/domain/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html',
  styleUrls: ['./lista-carro.component.scss']
})
export class ListaCarroComponent {
  Carro: Carro = new Carro();
  listadoCarrosWS:any;

  constructor(private carroService: CarroService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Carro = new Carro();
      this.Carro = params['carro']
    }
  
}

ngOnInit(): void {
 this.listadoCarrosWS = this.carroService.getAll();
}
}
