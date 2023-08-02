import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent {
  Persona: Persona = new Persona();
  listadoPersonaWS:any;

  constructor(private personaService: PersonaService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Persona = new Persona();
      this.Persona = params['persona']
    }
  
}

ngOnInit(): void {
 this.listadoPersonaWS = this.personaService.getAll();
}
}
