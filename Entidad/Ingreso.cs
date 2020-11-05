using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Ingreso
    {   
        [Key]
        public int IdReserva  { get; set; }
        public decimal ValorDia {get; set;}
        public decimal ValorTotal {get; set;}
        public int NumeroDias {get; set;}
        public int IdIngreso{get; set;}
        public  List<Acompañante> Acompañantes { get; set; }

        public void CalcularValorTotal(){
            ValorTotal= ValorDia*NumeroDias;            
        }
    }
}