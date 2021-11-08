import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface Conductor{
  id?: string,
  Nombre: string,
  Descripcion: string,
  Edad?: number,
  Destino: string,
  NumeroTelefonico?: Number,

}

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  API = 'http://localhost:1337/conductores'
  API2 = 'http://localhost:1337/estudiantes'

  constructor(
    private cliente: HttpClient
       ) { }

  listarConductores(){
    return this.cliente.get(this.API)
  }

  listarConductoresPorId(id: string){
    return this.cliente.get<Conductor>(`${this.API}/${id}`)
  }

  agergarConductores(Nombre: string, Descripcion: string, Edad: number, Destino: string, NumeroTelefonico: Number){
    return this.cliente.post(this.API, {Nombre, Descripcion, Edad, Destino, NumeroTelefonico} )
  }
     
  eliminarConductores(id: string){
    return this.cliente.delete(`${this.API}/${id}`) 
  }

  actualizarConductores(id: string, conductores: Conductor){
    return this.cliente.put(`${this.API}/${id}`, conductores);
    
  }

  agregarUsuario(Nombres: string, Usuario: string, Contrasenia: string){
    return this.cliente.post(this.API2, {Nombres, Usuario, Contrasenia} )
  }

  listarUsuario(){
    return this.cliente.get(this.API2);
  }

  

}
