using Entidad;
namespace Hotel_Neruda.Models
{
    public class AcompananteInputModel
    {
        public string identificacion { get; set; }
        public string primerNombre { get; set; }
        public string segundoNombre { get; set; }
        public string  primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public int edad { get; set; }
        public string genero { get; set; }
       
    }
    public class AcompananteViewModel : AcompananteInputModel

    {

        public AcompananteViewModel()

        {

        }

        public AcompananteViewModel(Acompañante acompanante)
        {
            identificacion = acompanante.Identificacion;
            primerNombre=acompanante.PrimerNombre;
            segundoNombre=acompanante.SegundoNombre;
            primerApellido=acompanante.PrimerApellido;
            segundoApellido=acompanante.SegundoApellido;
            edad=acompanante.Edad;
            genero=acompanante.Genero;
          

        }

    }
}