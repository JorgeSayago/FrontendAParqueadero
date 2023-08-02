
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
}