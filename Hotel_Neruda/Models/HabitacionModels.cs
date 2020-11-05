using Entidad;
namespace Hotel_Neruda.Models
{
    public class HabitacionInputModel
    {
         public string  codigo { get; set; }
        public string tipo { get; set; }
        public string numero_Habitacio { get; set; }
        public decimal precio { get; set; }
        public string caracteristica { get; set; }
        public string numero_de_Piso { get; set; }
    }
    public class HabitacionViewModel : HabitacionInputModel

    {

        public HabitacionViewModel()

        {

        }

        public HabitacionViewModel(Habitacion habitacion)
        {
            codigo=habitacion.Codigo;
            tipo=habitacion.Tipo;
            numero_Habitacio=habitacion.Numero_Habitacio;
            precio=habitacion.Precio;
            caracteristica=habitacion.Caracteristica;
            numero_de_Piso=habitacion.Numero_de_Piso;
        }

    }
}