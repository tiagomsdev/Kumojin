using EventsManagerApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsManagerApi.Repository
{
    public class InMemEventManagerRepository : IEventManagerRepository
    {
        List<Event> _Events;

        public InMemEventManagerRepository()
        {
            _Events = new List<Event>();
        }
        public List<Event> GetAllEvents()
        {
            return _Events;
        }

        public Event GetById(Guid id)
        {
            return _Events.SingleOrDefault(x => x.idEvent == id);
        }

        public void Insert(Event nEvent)
        {
            _Events.Add(nEvent);
        }
    }
}
