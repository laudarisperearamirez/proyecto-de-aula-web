import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from '../models/habitacion';

@Component({
  selector: 'app-habitacion-registro',
  templateUrl: './habitacion-registro.component.html',
  styleUrls: ['./habitacion-registro.component.css']
})
export class HabitacionRegistroComponent implements OnInit {
  habitacion: Habitacion;
  

  constructor(private habitacionService:HabitacionService) { }

  ngOnInit(){
    this.habitacion = new Habitacion();
    
  }

  add(){
    this.habitacionService.post(this.habitacion).subscribe(p => {

      if (p != null) {
      
      alert('Habitacion Registrado!');
      
      this.habitacion = p;
      
      }
      
      });
  }

}
