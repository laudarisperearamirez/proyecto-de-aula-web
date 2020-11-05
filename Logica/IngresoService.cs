using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class IngresoService
    {
        private readonly NerudaContext _context;
        public IngresoService(NerudaContext context)
        {
            _context = context;
        }
        public GuardarIngresoResponse Guardar(Ingreso Ingreso){
            try
            {
                var IngresoBuscar = _context.Ingresos.Find(Ingreso.IdIngreso);
                if(IngresoBuscar != null){
                    return new GuardarIngresoResponse($"Error el Ingreso {Ingreso.IdIngreso} ya se encuentra registrado");
                }
                _context.Ingresos.Add(Ingreso);
                _context.SaveChanges();
                return new GuardarIngresoResponse(Ingreso);
            }
            catch (Exception e)
            {
                
                return new GuardarIngresoResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Ingreso> ConsultarTodos(){
            List<Ingreso> Ingresos=_context.Ingresos.ToList();
            return Ingresos;
        }
        public string Eliminar(string id){
            try
            {
                var Ingreso= _context.Ingresos.Find(id);
                if(Ingreso != null){
                    _context.Ingresos.Remove(Ingreso);
                    _context.SaveChanges();
                    return ($"El Ingreso {Ingreso.IdIngreso} se ha eliminado exitosamente");
                }else{
                    return ($"Error, el Ingreso con ID {Ingreso.IdIngreso} no existe");
                }
            }
           catch (Exception e)
            {
                
                return ($"Error de la Aplicacion: {e.Message}");
            }
        }
        public Ingreso BuscarxIdentificacion(string id){
            Ingreso Ingreso= _context.Ingresos.Find(id);
            return Ingreso;
        }
    }
    public class GuardarIngresoResponse
    {
        public GuardarIngresoResponse(Ingreso ingreso)
        {
            Error = false;
            Ingreso = ingreso;
        }

        public GuardarIngresoResponse(string mensaje)

        {

            Error = true;

            Mensaje = mensaje;

        }

        public bool Error { get; set; }

        public string Mensaje { get; set; }

        public Ingreso Ingreso { get; set; }

    }
}
