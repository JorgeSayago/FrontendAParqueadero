import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent {

  persona: Persona= new Persona();

  constructor(private personaService: PersonaService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.persona = new Persona()
        this.persona = params['persona']
      }

  }
  guardar(){

    if(!isNaN(Number(this.persona.cedula))&& this.persona.cedula.length  == 10){
      this.personaService.save(this.persona).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.persona = new Persona()
      alert("Cliente creado exitosamente")
    }else{
      alert("Error la cedula ingresada no es correcta")
      this.persona = new Persona()
    }
    }
}
