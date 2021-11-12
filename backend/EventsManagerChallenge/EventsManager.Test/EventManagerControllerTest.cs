using System;
using Xunit;
using EventsManagerApi.Controllers;
using EventsManagerApi.Repository;
using EventsManagerApi.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EventsManager.Test
{
    public class EventManagerControllerTest
    {
        EventManagerController _controller;
        IEventManagerRepository _rep;

        
    public EventManagerControllerTest(){
            _rep = new InMemEventManagerRepository();
            _controller = new EventManagerController(_rep);
    }
        [Fact]
        public void Should_ReturnEventList_When_GetMethodExecuted()
        {
            //Arrange
            _rep.Insert(new Event() { name = "EventTest1", description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now });
            _rep.Insert(new Event() { name = "EventTest2", description = "EventTest2", endDate = DateTime.Now, startDate = DateTime.Now });
            //Act
            var result = _controller.GetAllEvents();
            //Assert
            Assert.IsType<OkObjectResult>(result);

            var list = result as OkObjectResult;

            Assert.IsType<List<Event>>(list.Value);

            var listEvents = list.Value as List<Event>;

            Assert.Equal(2, listEvents.Count);

        }

        [Fact]
        public void Should_ReturnEvent_When_SpecificIdPassed()
        {
            //Arrange
            var validGuid = new Guid();
            var invalidGuid = new Guid("d988e6af-cdee-4cba-8ad5-859e2aff57d9");

            _rep.Insert(new Event() { idEvent = validGuid, name = "EventTest1", description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now });
        

            //Act
            var notFoundResult = _controller.GetEventById(invalidGuid);
            var okResult = _controller.GetEventById(validGuid);

            //Assert
            Assert.IsType<NotFoundResult>(notFoundResult);
            Assert.IsType<OkObjectResult>(okResult);

            var item = okResult as OkObjectResult;

            Assert.IsType<Event>(item.Value);

            var eventItem = item.Value as Event;
            Assert.Equal(validGuid, eventItem.idEvent);
            Assert.Equal("EventTest1", eventItem.name);
        }

        [Fact]
        public void Should_ReturnEventCreatedSucessResponse_when_AddingNewEvent()
        {

            //Arrange
            var newEvent = new Event() {name = "EventTest1", description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now };

            //Act
            var createdResponse = _controller.AddEvent(newEvent);

            //Assert
            Assert.IsType<CreatedAtActionResult>(createdResponse);

            var item = createdResponse as CreatedAtActionResult;
            Assert.IsType<Event>(item.Value);

            var eventItem = item.Value as Event;
            Assert.Equal(newEvent.name, eventItem.name);
            Assert.Equal(newEvent.description, eventItem.description);
            Assert.Equal(newEvent.startDate, eventItem.startDate);
            Assert.Equal(newEvent.endDate, eventItem.endDate);
        }

        [Fact]
        public void Should_ReturnBadRequest_when_AddingEventWithoutRequeridField() 
        {

            //Arrange
            var incompleteEvent = new Event() { description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now };

            //Act
            _controller.ModelState.AddModelError("Name", "The name field is required");
            var badResponse = _controller.AddEvent(incompleteEvent);

            //Assert
            Assert.IsType<BadRequestObjectResult>(badResponse);
        }

        [Fact]
        public void Should_ReturnConflictResult_when_AddingSameIdEvent()
        {

            //Arrange
            var guid = new Guid();
            _rep.Insert(new Event() { idEvent = guid, name = "EventTest1", description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now });

            var sameIdEvent = new Event() { idEvent = guid, name = "EventTest1", description = "EventTest1", endDate = DateTime.Now, startDate = DateTime.Now };

            //Act
            var badResponse = _controller.AddEvent(sameIdEvent);

            //Assert
            Assert.IsType<ConflictResult>(badResponse);
        }
    }
}
