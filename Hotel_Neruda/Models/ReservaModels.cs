using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Neruda.Models
{
    public class ReservaInputModel
    {
        public int IdReserva             { get; set; }

        [Required(ErrorMessage = "La fecha de inicio es requerida")]
        public DateTime FechaInicio         { get; set; }

        [Required(ErrorMessage = "La fecha final es requerida")]
        public DateTime FechaFin            { get; set; }

        
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string IdCliente             { get; set; }

        [Required(ErrorMessage = "el codigo de la habitacion es requerido")]
        public string IdHabitacion          { get; set; }
    }

    public class ReservaViewModel : ReservaInputModel
    {
        public ReservaViewModel()
        {

        }
        public ReservaViewModel(Reserva reserva)
        {
            IdReserva = reserva.IdReserva;
            FechaInicio = reserva.FechaInicio;
            FechaFin = reserva.FechaFin;
            IdCliente = reserva.IdCliente;
            IdHabitacion = reserva.IdHabitacion;
        }
    }
}