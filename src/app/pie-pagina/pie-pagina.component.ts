import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import {  PersonaService } from 'src/app/services/persona.service';
import { Carro } from '../domain/carro';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.scss']
})
export class PiePaginaComponent {

  persona: Persona = new Persona();
  carro: Carro = new Carro();
  cedula : string = "";
  

  constructor(private personaService: PersonaService,private carroService: CarroService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = new Persona()
        this.persona = params['persona']
        this.carro = new Carro()
        this.carro = params['carro']
      }
    }

    guardar(){

    if(!isNaN(Number(this.persona.cedula))&& this.persona.cedula.length  == 10){
      this.personaService.save(this.persona).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.persona = new Persona()
      alert("Contacto creado exitosamente")
    }else{
      alert("Error la cedula ingresada no es correcta")
      this.persona = new Persona()
    }
    }

    guardarCarro(){
      this.carroService.save(this.carro).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.carroService.saveC(this.carro.placa,this.cedula).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.carro = new Carro()
      this.cedula = ""
      alert("Carrro agregado exitosamente")
    }

}
