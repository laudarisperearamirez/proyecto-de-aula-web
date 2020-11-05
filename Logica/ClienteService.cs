using Datos;

using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ClienteService
    {
        private readonly NerudaContext _context;
        public ClienteService(NerudaContext context)
        {
            _context = context;
        }
        public GuardarClienteResponse Guardar(Cliente cliente){
            try
            {
                var clienteBuscar = _context.Clientes.Find(cliente.Identificacion);
                if(clienteBuscar != null){
                    return new GuardarClienteResponse($"Error el cliente {cliente.Identificacion} ya se encuentra registrado");
                }
                _context.Clientes.Add(cliente);
                _context.SaveChanges();
                return new GuardarClienteResponse(cliente);
            }
            catch (Exception e)
            {
                
                return new GuardarClienteResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Cliente> ConsultarTodos(){
            List<Cliente> clientes=_context.Clientes.ToList();
            return clientes;
        }
        public string Eliminar(string id){
            try
            {
                var cliente= _context.Clientes.Find(id);
                if(cliente != null){
                    _context.Clientes.Remove(cliente);
                    _context.SaveChanges();
                    return ($"El cliente {cliente.Identificacion} se ha eliminado exitosamente");
                }else{
                    return ($"Error, el cliente con identificacion {cliente.Identificacion} no existe");
                }
            }
           catch (Exception e)
            {
                
                return ($"Error de la Aplicacion: {e.Message}");
            }
        }
        public Cliente BuscarxIdentificacion(string id){
            Cliente cliente= _context.Clientes.Find(id);
            return cliente;
        }
    }
    public class GuardarClienteResponse
    {
        public GuardarClienteResponse(Cliente cliente)
        {
            Error = false;
            Cliente = cliente;
        }

        public GuardarClienteResponse(string mensaje)

        {

            Error = true;

            Mensaje = mensaje;

        }

        public bool Error { get; set; }

        public string Mensaje { get; set; }

        public Cliente Cliente { get; set; }

    }
}
