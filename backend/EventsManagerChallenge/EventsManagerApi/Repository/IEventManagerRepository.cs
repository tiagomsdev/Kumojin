using EventsManagerApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsManagerApi.Repository
{
    public interface IEventManagerRepository
    {
        void Insert(Event nEvent);
        List<Event> GetAllEvents();
        Event GetById(Guid id);

    }
}
