import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.scss']
})
export class ActualizarPersonaComponent {
  persona: Persona= new Persona();

  constructor(private personaService: PersonaService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.persona = new Persona()
        this.persona = params['persona']
      }

  }
  modificar(){ //fire actualizado
    console.log(this.persona)
    //this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
    //this.contacto = new Contacto();

    //codigo para guardar en la base de datos
    this.personaService.update(this.persona).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    //this.contacto=new Contacto()
    this.router.navigate(['paginas/Lista'])
    
    }

}
