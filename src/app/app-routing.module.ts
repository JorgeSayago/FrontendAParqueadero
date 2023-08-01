import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { CrearCarroComponent } from './Page/crear-carro/crear-carro.component';

const routes: Routes = [
  { path:"pagina/crearUsuario",component:CrearClienteComponent},
  { path:"pagina/crearCarro",component:CrearCarroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
