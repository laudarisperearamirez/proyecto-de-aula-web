using Entidad;
namespace Hotel_Neruda.Models
{
    public class ClienteInputModel
    {
        public string identificacion { get; set; }
        public string primerNombre { get; set; }
        public string segundoNombre { get; set; }
        public string  primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public string edad { get; set; }
        public string genero { get; set; }
        public string telefono { get; set; }
        public string gmail { get; set; }
        public string direccion { get; set; }
        public string ciudad { get; set; }
    }
    public class ClienteViewModel : ClienteInputModel

    {

        public ClienteViewModel()

        {

        }

        public ClienteViewModel(Cliente cliente)
        {
            identificacion = cliente.Identificacion;
            primerNombre=cliente.PrimerNombre;
            segundoNombre=cliente.SegundoNombre;
            primerApellido=cliente.PrimerApellido;
            segundoApellido=cliente.SegundoApellido;
            edad=cliente.Edad;
            genero=cliente.Genero;
            telefono=cliente.Telefono;
            gmail=cliente.Gmail;
            direccion=cliente.Direccion;
            ciudad=cliente.Ciudad;

        }

    }
}