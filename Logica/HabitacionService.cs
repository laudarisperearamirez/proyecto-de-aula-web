using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class HabitacionService
    {
        private readonly NerudaContext _context;
        public HabitacionService(NerudaContext context)
        {
             _context = context;
        }
        public GuardarHabitacionResponse Guardar(Habitacion habitacion){
            try
            {
                var habitacionBuscar = _context.Habitaciones.Find(habitacion.Codigo);
                if(habitacionBuscar != null){
                    return new GuardarHabitacionResponse($"Error la habitacion {habitacion.Codigo} ya se encuentra registrado");
                }
                _context.Habitaciones.Add(habitacion);
                _context.SaveChanges();
                return new GuardarHabitacionResponse(habitacion);
            }
            catch (Exception e)
            {
                
                return new GuardarHabitacionResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
         public List<Habitacion> ConsultarTodos(){
            List<Habitacion> habitaciones=_context.Habitaciones.ToList();
            return habitaciones;
        }
        public Habitacion BuscarxCodigo(string codigo){
            Habitacion habitacion= _context.Habitaciones.Find(codigo);
            return habitacion;
        }
         public string Eliminar(string id){
            try
            {
                var habitacion= _context.Habitaciones.Find(id);
                if(habitacion != null){
                    _context.Habitaciones.Remove(habitacion);
                    _context.SaveChanges();
                    return ($"La habitacion {habitacion.Codigo} se ha eliminado exitosamente");
                }else{
                    return ($"Error, la habitacion : {habitacion.Codigo} no existe");
                }
            }
           catch (Exception e)
            {
                
                return ($"Error de la Aplicacion: {e.Message}");
            }
        }

    }
     public class GuardarHabitacionResponse
    {
        public GuardarHabitacionResponse(Habitacion habitacion)
        {
            Error = false;
            Habitacion = habitacion;
        }

        public GuardarHabitacionResponse(string mensaje)

        {

            Error = true;

            Mensaje = mensaje;

        }

        public bool Error { get; set; }

        public string Mensaje { get; set; }

        public Habitacion Habitacion { get; set; }

    }
}
