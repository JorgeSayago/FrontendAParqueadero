import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
eliminar(Persona: Persona){
  this.personaService.delete(Persona).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(Persona: Persona){
  console.log(Persona)
  let params: NavigationExtras = {
    queryParams: {
      Persona: Persona,
    }
  }
  this.router.navigate(['pagina/ActualizarPersona'], params)
}
}
