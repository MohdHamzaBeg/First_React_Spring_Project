package com.springframework.react.TheDivineCollections.model;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
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
public class User {
	@Id
	private int id;
	
	@NotNull
	@NotEmpty
	@Size(max=50)
	private String name;
	
	@Email
	private String email;
	
	@NotNull
	@Size(min = 8, max = 16)
	private String password;
	
	@NotNull
	private String number;
	
	@ManyToMany(mappedBy = "bids")
	private List<Item> mybids;
	
	@OneToMany(mappedBy = "owner")
	private List<Item> myitems ;
}
