import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { CrearCarroComponent } from './Page/crear-carro/crear-carro.component';
import { TicketComponent } from './pagina2/ticket/ticket.component';
import { ListicketComponent } from './page3/listicket/listicket.component';
import { ListaCarroComponent } from './Page/lista-carro/lista-carro.component';
import { ListaClienteComponent } from './Page/lista-cliente/lista-cliente.component';
import { ActualizarCarroComponent } from './Page/actualizar-carro/actualizar-carro.component';
import { ActualizarPersonaComponent } from './Page/actualizar-persona/actualizar-persona.component';

const routes: Routes = [
  { path:"pagina/crearUsuario",component:CrearClienteComponent},
  { path:"pagina/crearCarro",component:CrearCarroComponent},
  { path:"pagina/crearTicket",component:TicketComponent},
  { path:"pagina/listarTicket",component:ListicketComponent},
  { path:"pagina/listarCarro",component:ListaCarroComponent},
  { path:"pagina/listarCliente",component:ListaClienteComponent},
  { path:"pagina/ActualizarCarro",component:ActualizarCarroComponent},
  { path:"pagina/ActualizarPersona",component:ActualizarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
