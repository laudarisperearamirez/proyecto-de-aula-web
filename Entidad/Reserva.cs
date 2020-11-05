using System;
using System.ComponentModel.DataAnnotations;
namespace Entidad{
    public class Reserva
    {
        [Key]
        public int IdReserva                { get; set; }
        public DateTime FechaInicio         { get; set; }
        public DateTime FechaFin            { get; set; }
        public string IdCliente             { get; set; }
        public string IdHabitacion          { get; set; }
    }
}