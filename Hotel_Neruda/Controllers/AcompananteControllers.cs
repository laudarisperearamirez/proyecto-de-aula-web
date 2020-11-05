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
    public class AcompananteControllers: ControllerBase
    {
        private readonly AcompañanteService _acompananteService;
        public IConfiguration Configuration { get; }
        public AcompananteControllers(NerudaContext _context)
        {
            _acompananteService=new AcompañanteService(_context);
        }
        // GET: api/Acompanante
        [HttpGet]
        public IEnumerable<AcompananteViewModel> Gets()
        {
            var  acompanantes =_acompananteService.ConsultarTodos().Select(p=> new  AcompananteViewModel(p));
            return  acompanantes;
        }

        // GET: api/Acompanante/5
        [HttpGet("{identificacion}")]
        public ActionResult<AcompananteViewModel> Get(string identificacion)
        {
            var acompanante = _acompananteService.BuscarxIdentificacion(identificacion);
            if (acompanante == null) return NotFound();
            var acompananteViewModel = new AcompananteViewModel(acompanante);
            return acompananteViewModel;
        }

        // POST: api/Acompanante
        [HttpPost]
        public ActionResult<AcompananteViewModel> Post(AcompananteInputModel acompananteInput)
        {
            Acompañante acompanante = MapearAcompanante(acompananteInput);
            var response = _acompananteService.Guardar(acompanante);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Cliente", response.Mensaje);
                var problemDetails= new ValidationProblemDetails(ModelState){
                    Status= StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Acompañante);
        }
        private Acompañante MapearAcompanante(AcompananteInputModel acompananteInput)
        {
            var  acompanante = new Acompañante
            {
                Identificacion = acompananteInput.identificacion,
                PrimerNombre =  acompananteInput.primerNombre,
                SegundoNombre= acompananteInput.segundoNombre,
                PrimerApellido=acompananteInput.primerApellido,
                SegundoApellido=acompananteInput.segundoApellido,
                Edad=acompananteInput.edad,
                Genero=acompananteInput.genero,
              
                
            };
            return acompanante;
        }
        
    }
}