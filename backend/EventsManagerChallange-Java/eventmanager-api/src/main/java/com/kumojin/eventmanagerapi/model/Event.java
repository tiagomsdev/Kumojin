package com.kumojin.eventmanagerapi.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Event{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEvent;
	
	@Column
	@NotEmpty(message = "The name is required.")
	@Size(message = "The length of name cannot be longer than 32 characters.")
	private String name;
	
	@Column
	@NotEmpty(message = "The description is required.")
	private String description;
	
	@Column
	@NotNull(message = "The startDate is required.")
	private Date startDate;
	
	@Column
	@NotNull(message = "The endDate is required.")
	private Date endDate;
	
}
