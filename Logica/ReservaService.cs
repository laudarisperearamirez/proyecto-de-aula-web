using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ReservaService
    {
        private readonly NerudaContext _context;
        public ReservaService(NerudaContext context)
        {
            _context=context;
        }
        public GuardarReservaResponse Guardar(Reserva reserva)
        {
            try
            {
                var reservaBuscada = _context.Reservas.Find(reserva.IdReserva);
                if (reservaBuscada != null)
                {
                    return new GuardarReservaResponse("Error esta reserva ya se encuentra registrado");
                }
                _context.Reservas.Add(reserva);
                _context.SaveChanges();
                return new GuardarReservaResponse(reserva);
            }
            catch (Exception e)
            {
                return new GuardarReservaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Reserva> ConsultarTodos()
        {
            List<Reserva> reservas = _context.Reservas.ToList();
            return reservas;
        }

        public string Eliminar(int identificacion)
        {
            try
            {
                var reserva = _context.Reservas.Find(identificacion);
                if (reserva != null)
                {
                    _context.Reservas.Remove(reserva);
                    _context.SaveChanges();
                    return ($"El registro {reserva.IdReserva} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, la reserva no. {identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {
                return $"Error de la Aplicación: {e.Message}";
            }
        }

        public ModificarReservaResponse Modificar(Reserva reservaNueva)
        {            
            try
            {
                var reservaVieja = _context.Reservas.Find(reservaNueva.IdReserva);
                if (reservaVieja != null)
                {
                    reservaVieja.IdReserva=reservaNueva.IdReserva;
                    reservaVieja.FechaInicio=reservaNueva.FechaInicio;
                    reservaVieja.FechaFin=reservaNueva.FechaFin;
                    reservaVieja.IdCliente=reservaNueva.IdCliente;
                    reservaVieja.IdHabitacion=reservaNueva.IdHabitacion;
                    _context.Reservas.Update(reservaVieja);
                    _context.SaveChanges();
                    return new ModificarReservaResponse(reservaVieja);
                }
                else
                {
                    return new ModificarReservaResponse($"Lo sentimos, {reservaNueva.IdReserva} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {
                return new ModificarReservaResponse($"Error de la Aplicación: {e.Message}");
            }
        }

        public Reserva BuscarxIdentificacion(int identificacion)
        {
            Reserva reserva = _context.Reservas.Find(identificacion);
            return reserva;
        }

        public class GuardarReservaResponse
        {
            public GuardarReservaResponse(Reserva reserva)
            {
                Error = false;
                Reserva = reserva;
            }
            public GuardarReservaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Reserva Reserva { get; set; }
        }

        public class ModificarReservaResponse
        {
            public ModificarReservaResponse(Reserva reserva)
            {
                Error = false;
                Reserva = reserva;
            }
            public ModificarReservaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Reserva Reserva { get; set; }
        }
    }
}