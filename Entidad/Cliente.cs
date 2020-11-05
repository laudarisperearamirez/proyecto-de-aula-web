using System;
using System.ComponentModel.DataAnnotations;
namespace Entidad{
    public class Cliente{
        
        [Key]
        public string Identificacion { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string  PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public string Edad { get; set; }
        public string Genero { get; set; }
        public string Telefono { get; set; }
        public string Gmail { get; set; }
        public string Direccion { get; set; }
        public string Ciudad { get; set; }
    }
}