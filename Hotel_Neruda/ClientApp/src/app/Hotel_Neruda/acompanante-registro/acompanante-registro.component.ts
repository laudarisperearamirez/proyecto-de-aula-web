import { Component, OnInit } from '@angular/core';
import { AcompananteService } from 'src/app/services/acompanante.service';
import { Acompanante } from '../models/acompanante';

@Component({
  selector: 'app-acompanante-registro',
  templateUrl: './acompanante-registro.component.html',
  styleUrls: ['./acompanante-registro.component.css']
})
export class AcompananteRegistroComponent implements OnInit { 

  acompanante: Acompanante;
  constructor(private acompananteService:AcompananteService) { }

  ngOnInit(): void {
    this.acompanante= new Acompanante;
  }
  
  add(){
    this.acompananteService.post(this.acompanante).subscribe(p => {

      if (p != null) {
      
      alert('Acompañante Registrado!');
      
      this.acompanante = p;
      
      }
      
      });
  }
}
