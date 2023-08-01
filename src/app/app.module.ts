import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CrearCarroComponent } from './Page/crear-carro/crear-carro.component';
import { TicketComponent } from './pagina2/ticket/ticket.component';
import { ListaLugarParqueaderoComponent } from './Page/lista-lugar-parqueadero/lista-lugar-parqueadero.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    CabeceraComponent,
    MenuComponent,
    PiePaginaComponent,
    CrearCarroComponent,
    TicketComponent,
    ListaLugarParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
