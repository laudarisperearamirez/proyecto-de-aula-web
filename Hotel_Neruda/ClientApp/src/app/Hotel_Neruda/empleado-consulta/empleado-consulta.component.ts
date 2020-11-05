import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado-consulta',
  templateUrl: './empleado-consulta.component.html',
  styleUrls: ['./empleado-consulta.component.css']
})
export class EmpleadoConsultaComponent implements OnInit {
  empleados: Empleado[];
  searchText:string;
  
  constructor() { }

  ngOnInit(): void {
    this.empleados = [
      {identificacion:"1111", primerNombre:"Juan",segundoNombre:"pedro",primerApellido:"lora",segundoApellido:"perea",
      edad:20,genero:"masculino",telefono:172,gmail:"juanpl@gmail.com",direccion:"a23",
      ciudad:"cali",nivel_estudio:"universitario",cargo:"gerente"}
     
    ]      
  }

}
