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
        console.log(params)
        this.persona = new Persona()
        this.persona = params['persona']
      }

  }
  guardar(){
    console.log(this.persona)
    if(!isNaN(Number(this.persona.cedula)) && this.persona.cedula.length === 10 ){
      this.personaService.save(this.persona).subscribe(data => {
        console.log("Resultado WS SAVE", data);
        this.router.navigate(["paginas/Lista"])
      });
      this.persona=new Persona()
      alert("Creado exitosamente")
  }
  else{
    alert("error numero de cedula incompleta o incorrecta")
    }
this.persona = new Persona()
}
}
