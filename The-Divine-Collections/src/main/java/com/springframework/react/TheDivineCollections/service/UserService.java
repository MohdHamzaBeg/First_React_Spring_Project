package com.springframework.react.TheDivineCollections.service;

import java.util.Optional;

import com.springframework.react.TheDivineCollections.model.User;

public interface UserService {
	void saveUser(User user);
	
	User getUserbyId(String email, String password);
}
