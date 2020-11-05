using Entidad;
using System.Collections.Generic;
namespace Hotel_Neruda.Models
{
    public class IngresoInputModel
    {

        public int idReserva { get; set; }
        public decimal valorDia { get; set; }
        public decimal valorTotal { get; set; }
        public int numeroDias { get; set; }
        public int idIngreso { get; set; }
        public List<Acompañante> acompañantes { get; set; }


    }
    public class IngresoViewModel : IngresoInputModel

    {

        public IngresoViewModel()

        {

        }

        public IngresoViewModel(Ingreso ingreso)
        {
            idReserva = ingreso.IdReserva;
            valorDia = ingreso.ValorDia;
            valorTotal = ingreso.ValorTotal;
            numeroDias = ingreso.NumeroDias;
            idIngreso = ingreso.IdIngreso;
            acompañantes = ingreso.Acompañantes;


        }

    }
}