<<<<<<< HEAD

import { Carro } from "./carro";
import { LugarParqueo } from "./lugarParqueo";

import { Persona } from "./persona";

export class Ticket{
    codigo: string ='';
   // placa:String='';
   // cedula:String='';
   // lugarC:String='';

    persona: Persona=new Persona;
    carro: Carro=new Carro ;
    lugarParqueo: LugarParqueo=new  LugarParqueo;
=======
import { Carro } from "./carro";
import { Lugar } from "./lugar";
import { Persona } from "./persona";

export class Ticket{
    numeroTicket: string ='';
    placa:String='';
>>>>>>> parent of 0e1d134 (Configuracion)
}