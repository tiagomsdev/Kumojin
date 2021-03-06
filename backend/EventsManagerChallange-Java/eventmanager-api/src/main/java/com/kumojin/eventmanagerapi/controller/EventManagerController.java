package com.kumojin.eventmanagerapi.controller;

import java.util.List;
import java.util.NoSuchElementException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kumojin.eventmanagerapi.model.Event;
import com.kumojin.eventmanagerapi.service.EventManagerService;

@RestController
@RequestMapping("/api/eventmanager")
public class EventManagerController {
	
	@Autowired
	private EventManagerService _service;
	
	@GetMapping
	public List<Event> getAllEvents(){
		return _service.getAllEvents();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable Long id){
		Event event;
		try {
			event = _service.getById(id);
        }catch(NoSuchElementException e) {
        	return ResponseEntity.notFound().build();
        }
		return ResponseEntity.ok().body(event);
	}
	
	@PostMapping
	public ResponseEntity<Event> addEvent(@Valid @RequestBody Event event) {
		Event newEvent = _service.insert(event);
	    return new ResponseEntity<>(newEvent , HttpStatus.CREATED);
	    
	}
	
}
