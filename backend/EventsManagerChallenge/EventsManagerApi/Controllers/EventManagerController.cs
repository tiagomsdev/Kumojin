using EventsManagerApi.Models;
using EventsManagerApi.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsManagerApi.Controllers
{
    [Authorize(AuthenticationSchemes = "JwtBearer")]
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class EventManagerController : ControllerBase
    {
        private readonly IEventManagerRepository _rep;

        public EventManagerController(IEventManagerRepository rep)
        {
            this._rep = rep;
        }

        [HttpGet]
        public List<Event> GetAllEvents()
        {
            return this._rep.GetAllEvents();
        }

        [HttpGet("{id}")]
        public IActionResult GetEventById(Guid id)
        {
            var returnedEvent = this._rep.GetById(id);
            if(returnedEvent == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(returnedEvent);
        }

        [HttpPost]
        public IActionResult AddEvent([FromBody] Event newEvent)
        {
            var exists = _rep.GetById(newEvent.idEvent);
            if (exists != null)
                return new ConflictResult();

            this._rep.Insert(newEvent);
            return CreatedAtAction("GetAllEvents", new { id = newEvent.idEvent }, newEvent);
        }
    }
}
