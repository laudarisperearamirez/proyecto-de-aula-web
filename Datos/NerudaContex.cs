using Microsoft.EntityFrameworkCore;
using Entidad;

namespace Datos
{
    public class NerudaContext : DbContext
    {
        public NerudaContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Habitacion> Habitaciones { get; set; }
        public DbSet<Reserva> Reservas {get; set;}
        public DbSet<Ingreso> Ingresos {get; set;}
        public DbSet<Acompañante> Acompañante {get; set;}
   }
}
