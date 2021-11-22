package com.kumojin.eventmanagerapi;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kumojin.eventmanagerapi.controller.EventManagerController;
import com.kumojin.eventmanagerapi.model.Event;
import com.kumojin.eventmanagerapi.security.services.UserService;
import com.kumojin.eventmanagerapi.security.util.TokenUtil;
import com.kumojin.eventmanagerapi.service.EventManagerService;

@WebMvcTest({EventManagerController.class, UserService.class, TokenUtil.class})
@AutoConfigureMockMvc(addFilters = false)
public class EventManagerControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
    @Autowired
    ObjectMapper mapper;
    
    @MockBean
    EventManagerService _service;
    
    Date date = new Date(System.currentTimeMillis());
    
    Event EVENT_1 = new Event(1L,"Metallica concert","Metallica concert",date,date);
    Event EVENT_2 = new Event(2L,"Rage against the machine FEQ","Feq 2022",date,date);
    Event EVENT_3 = new Event(3L,"Cirque du Soleil","Corteo",date,date);
    
    @Test
    public void Should_ReturnEventList_When_GetMethodExecuted() throws Exception{
    	List<Event> events = new ArrayList<>(Arrays.asList(EVENT_1,EVENT_2,EVENT_3));
    	
    	Mockito.when(_service.getAllEvents()).thenReturn(events);
    	
    	mockMvc.perform(MockMvcRequestBuilders
    			.get("/api/eventmanager")
    			.contentType(MediaType.APPLICATION_JSON))
    			.andExpect(status().isOk())
    			.andExpect(jsonPath("$", hasSize(3)))
    			.andExpect(jsonPath("$[2].name", is("Cirque du Soleil")));
    }
    
    @Test
    public void Should_ReturnEvent_When_SpecificIdPassed() throws Exception {
    	
    	Mockito.when(_service.getById(EVENT_1.getIdEvent())).thenReturn(EVENT_1);
    	
    	mockMvc.perform(MockMvcRequestBuilders
    			.get("/api/eventmanager/1")
    			.contentType(MediaType.APPLICATION_JSON))
    			.andExpect(status().isOk())
    			.andExpect(jsonPath("$", notNullValue()))
    			.andExpect(jsonPath("$.name", is("Metallica concert")));
    	
    }
    
    @Test
    public void Should_ReturnEventCreatedSucessResponse_when_AddingNewEvent() throws Exception{
    	
    	Event newEvent = Event.builder()
    			.idEvent(10L)
    			.name("Festivent de levis")
    			.description("festivent")
    			.startDate(date)
    			.endDate(date)
    			.build();
    	
    	Mockito.when(_service.insert(newEvent)).thenReturn(newEvent);
    	
    	MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/eventmanager")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(newEvent));
    	
    	 mockMvc.perform(mockRequest)
         .andExpect(status().isCreated())
         .andExpect(jsonPath("$", notNullValue()))
         .andExpect(jsonPath("$.description", is("festivent")));
    }
    
    @Test
    public void Should_ReturnBadRequest_when_AddingEventWithoutRequeridField() throws Exception{
    	Event incompleteEvent = Event.builder()
    			.idEvent(10L)
    			.description("festivent")
    			.startDate(date)
    			.endDate(date)
    			.build();
    	
    	Mockito.when(_service.insert(incompleteEvent)).thenReturn(incompleteEvent);
    	
    	MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/eventmanager")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(incompleteEvent));
    	
    	mockMvc.perform(mockRequest)
        .andExpect(status().isBadRequest());
    }
    
    @Test
    public void Should_ReturnBadRequest_when_AddingNameGreaterThan32() throws Exception{
    	Event invalidName = Event.builder()
    			.idEvent(10L)
    			.name("TESTTESTTESTTESTTESTTESTTESTTESTTEST")
    			.description("festivent")
    			.startDate(date)
    			.endDate(date)
    			.build();
    	
    	Mockito.when(_service.insert(invalidName)).thenReturn(invalidName);
    	
    	MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/eventmanager")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(invalidName));
    	
    	mockMvc.perform(mockRequest)
        .andExpect(status().isBadRequest());
    }
    
}
