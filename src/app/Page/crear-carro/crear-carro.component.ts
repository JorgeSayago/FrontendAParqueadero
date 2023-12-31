import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/domain/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-crear-carro',
  templateUrl: './crear-carro.component.html',
  styleUrls: ['./crear-carro.component.scss']
})
export class CrearCarroComponent {

  carro: Carro = new Carro();

  constructor(private carroService: CarroService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.carro = new Carro()
        this.carro = params['carro']
      }

  }
  guardar(){
      this.carroService.save(this.carro).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.carro = new Carro()
      alert("Carro creado exitosamente")
    }
}
