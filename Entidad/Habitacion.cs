using System;
using System.ComponentModel.DataAnnotations;
namespace Entidad{
    public class Habitacion{
        [Key]
        public string  Codigo { get; set; }
        public string Tipo { get; set; }
        public string Numero_Habitacio { get; set; }
        public decimal Precio { get; set; }
        public string Caracteristica { get; set; }
        public string Numero_de_Piso { get; set; }
    }
}