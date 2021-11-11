using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsManagerApi.Models
{
    public class Event
    {
        public Event()
        {
            this.idEvent = Guid.NewGuid();
        }
        public Guid idEvent { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}
