using System.ComponentModel.DataAnnotations;
    using System;
namespace Entidad
{
    
    public class Acompañante
    {

        [Key]
        public string Identificacion { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public int Edad { get; set; }
        public string Genero { get; set; }
    }
}