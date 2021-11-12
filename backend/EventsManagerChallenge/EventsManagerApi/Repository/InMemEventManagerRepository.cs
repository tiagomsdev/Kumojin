using EventsManagerApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsManagerApi.Repository
{
    public class InMemEventManagerRepository : IEventManagerRepository
    {
        private readonly List<Event> _events;

        public InMemEventManagerRepository()
        {
            _events = new List<Event>();
        }
        public List<Event> GetAllEvents()
        {
            return _events;
        }

        public Event GetById(Guid id)
        {
            return _events.SingleOrDefault(x => x.idEvent == id);
        }

        public void Insert(Event newEvent)
        {
            _events.Add(newEvent);
        }
    }
}
