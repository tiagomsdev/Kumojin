package com.kumojin.eventmanagerapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kumojin.eventmanagerapi.model.Event;
import com.kumojin.eventmanagerapi.repository.EventManagerRepository;

@Service
public class EventManagerService {
	
	@Autowired
	private EventManagerRepository _repo;
	
	public List<Event> getAllEvents(){
		return _repo.findAll();
	}
	
	public Event getById(Long id) {
		Event event = _repo.findById(id).get();
		return event;
	}
	
	public Event insert(Event event) {
		return _repo.save(event);
	}

}
