using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Hotel_Neruda.Models;
using Datos;

namespace Hotel_Neruda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngresoControllers: ControllerBase
    {
        private readonly IngresoService _ingresoService;
        public IConfiguration Configuration { get; }
        public IngresoControllers(NerudaContext _context)
        {
            _ingresoService=new IngresoService(_context);
        }
        // GET: api/cliente
        [HttpGet]
        public IEnumerable<IngresoViewModel> Gets()
        {
            var  ingresos = _ingresoService.ConsultarTodos().Select(p=> new  IngresoViewModel(p));
            return  ingresos;
        }

        // GET: api/Cliente/5
        [HttpGet("{IdIngreso}")]
        public ActionResult<IngresoViewModel> Get(string IdIngreso)
        {
            var ingreso = _ingresoService.BuscarxIdentificacion(IdIngreso);
            if (ingreso == null) return NotFound();
            var ingresoViewModel = new IngresoViewModel(ingreso);
            return ingresoViewModel;
        }

        // POST: api/cliente
        [HttpPost]
        public ActionResult<IngresoViewModel> Post(IngresoInputModel ingresoInput)
        {
            Ingreso ingreso = MapearIngreso(ingresoInput);
            var response = _ingresoService.Guardar(ingreso);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Ingreso", response.Mensaje);
                var problemDetails= new ValidationProblemDetails(ModelState){
                    Status= StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Ingreso);
        }
        private Ingreso MapearIngreso(IngresoInputModel ingresoInput)
        {
            var  ingreso = new Ingreso
            {   IdReserva=ingresoInput.idReserva,
            ValorDia=ingresoInput.valorDia,
            ValorTotal=ingresoInput.valorTotal,
            NumeroDias=ingresoInput.numeroDias,
            IdIngreso=ingresoInput.idIngreso,
            Acompañantes=ingresoInput.acompañantes,

                
                
            };
            return ingreso;
        }
        
    }
}