import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/domain/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-actualizar-carro',
  templateUrl: './actualizar-carro.component.html',
  styleUrls: ['./actualizar-carro.component.scss']
})
export class ActualizarCarroComponent {
  carro: Carro = new Carro();

  constructor(private carroService: CarroService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.carro = new Carro()
        this.carro = params['carro']
      }

  }
  modificar(){ //fire actualizado
    console.log(this.carro)
    //this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
    //this.contacto = new Contacto();

    //codigo para guardar en la base de datos
    this.carroService.update(this.carro).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    //this.contacto=new Contacto()
    this.router.navigate(['paginas/Lista'])
    
    }
}
