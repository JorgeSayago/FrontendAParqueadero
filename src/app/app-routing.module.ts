import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { CrearCarroComponent } from './Page/crear-carro/crear-carro.component';
import { TicketComponent } from './pagina2/ticket/ticket.component';

const routes: Routes = [
  { path:"pagina/crearUsuario",component:CrearClienteComponent},
  { path:"pagina/crearCarro",component:CrearCarroComponent},
  { path:"pagina/crearTicket",component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
