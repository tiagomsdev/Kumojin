package com.kumojin.eventmanagerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kumojin.eventmanagerapi.model.Event;

@Repository
public interface EventManagerRepository extends JpaRepository<Event, Long>{

}
