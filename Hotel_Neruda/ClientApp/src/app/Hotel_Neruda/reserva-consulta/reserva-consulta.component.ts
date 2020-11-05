import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { Cliente } from '../models/cliente';
import { Habitacion } from '../models/habitacion';
import { Reserva } from '../models/reserva';
import { Location } from '@angular/common';
import { Mensajes } from 'src/app/services/mensajes';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserva-consulta',
  templateUrl: './reserva-consulta.component.html',
  styles: [`
    .form-group.hidden {
      width: 0;
      margin: 0;
      border: none;
      padding: 0;
    }
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }.card { overflow:hidden };
  `]
})

export class ReservaConsultaComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  searchText:string;
  prueba1:Date;
  prueba2:Date;
  modal: boolean = false;
  baderilla:number=0;
  totalPagar:number=0;
  validadorFechasIguales:number = 0;
  clienteR:boolean=false;
  cumpleCondicion:number=0;
  idn: string;
  _fechaInicio:Date;
  _fechaFin:Date;
  _idHabitacion:string;


  //esto es de la gestion de reserva
  formGroup: FormGroup;
  reserva:Reserva;
  habitaciones:Habitacion[];
  habitacionesDisponibles:Habitacion[] = [];
  habitacion:Habitacion;
  reservas:Reserva[];
  equisde:Cliente;
    //
      eventsInicio: string[] = [];
      eventsFin: string[] = [];
    //

  //esto es de la gestion de reserva

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private location: Location,
    private reservaService: ReservaService,
    private clienteService: ClienteService,
    private habitacionService: HabitacionService,
    private formBuilder: FormBuilder,
    private mensaje: Mensajes,
    private modalService: NgbModal
    ) 
  {
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', 1);
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.prueba1 = new Date( this.fromDate.year , this.fromDate.month -1 , this.fromDate.day);
    this.prueba2 = new Date(  this.toDate.year,this.toDate.month -1 ,this.toDate.day);

  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.prueba1 = new Date(date.year,date.month-1,date.day);
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this.prueba2 = new Date(date.year,date.month-1,date.day);
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.prueba1 = new Date(date.year,date.month-1,date.day);
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  ngOnInit() {
    this.traerHabitaciones();
    this.traerReservas();
    this.esconderDiv();
  }

  traerHabitaciones(){
    this.habitacionService.get().subscribe(result => {
      this.habitaciones = result;
    });
  }

  traerReservas(){
    this.reservaService.get().subscribe(result =>{
      this.reservas = result;
    });
  }

  esconderDiv(){    
    this.clienteR=false;    
  }

  change(){
    if(this.modal)
      this.modal=false;
    else
      this.modal=true;
  }

  goBack(){
    // window.history.back();
    this.location.back();
  }

  pintarInput(idhab:string){
    this._fechaFin =this.prueba2;
    this._fechaInicio =this.prueba1;
    this._idHabitacion=idhab;
    this.buildForm();
  }

  //Esto es del modal content del registro de reserva
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { size: 'lg', scrollable: true, centered: true });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' ,centered: true });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    var unu = this.validadorFechas();
      if(unu>=1){
        this.mensaje.Mostrar("Resultado Operación","Ya hay una reserva en esta fecha :c");       
      }else{
        this.add();
      }
  }

  add() {
    this.reserva = this.formGroup.value;
    alert('"valores a entrar:"'+this.reserva.fechaFin +" aparte"+ this.reserva.fechaInicio+"<br>"+this.reserva.idHabitacion+" "+this.reserva.idCliente);
    this.reservaService.post(this.reserva).subscribe(p => {
      if (p != null) {
        this.mensaje.Mostrar("Resultado Operación","¡Reserva Creada! :)");  
        this.reserva = p;
      }
    });
    this.traerReservas();
  }

  validadorFechas(): number {
    this.traerReservas();
    this.reserva = this.formGroup.value;
    var idhab = this.reserva.idHabitacion;

    this.reservas.forEach(item => {
        
      var toma1 =new Date(this.prueba1);
      var toma2 =new Date(this.prueba2);
      var fechaI = new Date(item.fechaInicio);
      var fechaF = new Date(item.fechaFin);        
      if(toma1 > fechaI && toma1 < fechaF && idhab==item.idHabitacion ||
         toma2 > fechaI && toma2 < fechaF && idhab==item.idHabitacion){
        return this.baderilla=this.baderilla+1;
        }else{
          return this.baderilla=this.baderilla+0;
        }
     });
     return this.baderilla;    
  }

  //todo lo del formGroup

  private buildForm() {
    this.reserva = new Reserva();
    this.formGroup = this.formBuilder.group({
      fechaInicio:this.prueba1,
      fechaFin:this.prueba2,
      idHabitacion: this._idHabitacion,
      idCliente: [this.reserva.idCliente, Validators.required],
    });
  } 

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  public getErrorV(controlName: string): ValidationErrors {
    return this.formGroup.get(controlName).errors;
  }

  get control() { return this.formGroup.controls; }


  //cosas del apartado de cliente
  tomarValor(texto:string){
    this.idn=texto;
    if(texto==''){
      this.mensaje.Mostrar("Resultado Operación","Identificación invalida");
    }else{
      this.clienteService.getId(this.idn).subscribe(p => {
        if (p != null) {
          this.mensaje.Mostrar("Resultado Operación","Cliente Encontrado!!! :)");
           this.esconderDiv();
        }else{
          this.mensaje.Mostrar("Resultado Operación","Cliente No Encontrado!!! :(");
          this.clienteR=true;
        }
      });
    }
  }

  fechaCorrecta(){ 
    var fechaActual = new Date();
    var toma1 =new Date(this.prueba1);
    var toma2 =new Date(this.prueba2);
    if(toma1>toma2){
      this.mensaje.Mostrar("¡Problemas!","La fecha final debe ser mayor a la fecha inicial");
    }else if(fechaActual>toma1||fechaActual>toma2){
      this.mensaje.Mostrar("¡Problemas!","No se puede reservar en fechas anterioreas a la actual :c");      
    }else{
      this.comprobadorfechas();
    }
  }
  
  

  comprobadorfechas(){
    console.log("comprobando fechas...");
    this.traerReservas();    
    this.traerHabitaciones();
    this.habitaciones.forEach(hab=>{
        this.reservas.forEach(res => {  
          var toma1 =new Date(this.prueba1);
          var toma2 =new Date(this.prueba2);
          var fechaI = new Date(res.fechaInicio);
          var fechaF = new Date(res.fechaFin);        
          if(toma1 > fechaI && toma1 < fechaF && hab.codigo==res.idHabitacion ||
             toma2 > fechaI && toma2 < fechaF && hab.codigo==res.idHabitacion ||
             toma1 < fechaI && toma2 > fechaF && hab.codigo==res.idHabitacion){
                this.cumpleCondicion=this.cumpleCondicion+1;            
            }
          });

      if(this.cumpleCondicion==0){
        var probador = 0;
        this.habitacionesDisponibles.forEach(habdis=>{
          if(habdis.codigo==hab.codigo){
            probador = probador+1;
          }
        });
        if(probador==0){ 
          this.habitacionesDisponibles.push(hab);
          console.log(this.habitacionesDisponibles);
        }             
       }else{
          this.cumpleCondicion=0;
        }
    });

    if(this.habitacionesDisponibles.length<=0){
      this.mensaje.Mostrar("¡Vaya!...","No hay habitaciones disponibles en esta fecha"+
      "<br> Intente consultar con otro intervalo nuevamente :D.");
    }
    this.calcularDias();
  }

  calcularDias(){
    this.habitacionesDisponibles.forEach(hab=>{      
      var dfi = new Date(this.prueba1).getTime();
      var dff = new Date(this.prueba2).getTime();
      var diff = (dff - dfi);
      this.totalPagar = (diff/(1000*60*60*24))+1;
    });
  }

  optimizacionClickEliminarPcsViejos(i:number){
    this.actualizacionTablaReservaEliminacion(i);
    this.actualizacionTablaReservaEliminacion(i);
  }

  actualizacionTablaReservaEliminacion(i:number){
    this.traerReservas();    
    this.reservas.splice(this.reservas.findIndex(item =>item.idReserva==i),1);
  }

  delete(identificacion: number) {
    this.reservaService.delete(identificacion).subscribe(p => {
      this.mensaje.Mostrar("Resultado Operación","Reserva Eliminada!!! :)");
    });
    this.actualizacionTablaReservaEliminacion(identificacion);
  }

  
  

}
