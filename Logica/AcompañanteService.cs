using Datos;

using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class AcompañanteService
    {
        private readonly NerudaContext _context;
        public AcompañanteService(NerudaContext context)
        {
            _context = context;
        }
        public GuardarAcompañanteResponse Guardar(Acompañante acompañante){
            try
            {
                var acompañanteBuscar = _context.Acompañante.Find(acompañante.Identificacion);
                if(acompañanteBuscar != null){
                    return new GuardarAcompañanteResponse($"Error el acompañante {acompañante.Identificacion} ya se encuentra registrado");
                }
                _context.Acompañante.Add(acompañante);
                _context.SaveChanges();
                return new GuardarAcompañanteResponse(acompañante);
            }
            catch (Exception e)
            {
                
                return new GuardarAcompañanteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Acompañante> ConsultarTodos(){
            List<Acompañante> acompañantes=_context.Acompañante.ToList();
            return acompañantes;
        }
        public string Eliminar(string id){
            try
            {
                var acompañante= _context.Acompañante.Find(id);
                if(acompañante != null){
                    _context.Acompañante.Remove(acompañante);
                    _context.SaveChanges();
                    return ($"El acompañante {acompañante.Identificacion} se ha eliminado exitosamente");
                }else{
                    return ($"Error, el acompañante con identificacion {acompañante.Identificacion} no existe");
                }
            }
           catch (Exception e)
            {
                
                return ($"Error de la Aplicacion: {e.Message}");
            }
        }
        public Acompañante BuscarxIdentificacion(string id){
            Acompañante acompañante= _context.Acompañante.Find(id);
            return acompañante;
        }
    }
    public class GuardarAcompañanteResponse
    {
        public GuardarAcompañanteResponse(Acompañante acompañante)
        {
            Error = false;
            Acompañante = acompañante;
        }

        public GuardarAcompañanteResponse(string mensaje)

        {

            Error = true;

            Mensaje = mensaje;

        }

        public bool Error { get; set; }

        public string Mensaje { get; set; }

        public Acompañante Acompañante { get; set; }

    }
}
