import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado-registro',
  templateUrl: './empleado-registro.component.html',
  styleUrls: ['./empleado-registro.component.css']
})
export class EmpleadoRegistroComponent implements OnInit {
  empleado: Empleado;
  constructor() { }

  ngOnInit(): void {
    this.empleado = new Empleado();
  }

  add():void {

  }

}
