using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [Required]
        public string name { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public DateTime startDate { get; set; }
        [Required]
        public DateTime endDate { get; set; }
    }
}
