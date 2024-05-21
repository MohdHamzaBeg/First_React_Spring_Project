package com.springframework.react.TheDivineCollections.model;

import java.util.List;
import java.util.Map;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {
	@Id
	private int id;
	
	@NotNull
	@NotEmpty
	@Size(max=50)
	private String name;
	
	@Column(length = 1000)
	private String description;
	
	private int bid;
	
	//@NotNull
	//@NotEmpty
	private int age;
	
	//@NotNull
	//@NotEmpty
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User owner;
	
	@ManyToMany
	private Map<Integer, User> bids;
	
	
}
