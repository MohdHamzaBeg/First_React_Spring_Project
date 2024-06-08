package com.springframework.react.TheDivineCollections.service;

import java.util.List;
import java.util.Optional;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;

public interface UserService {
	void saveUser(User user);
	
	User getUserbyId(String email, String password);
	
	List<ItemProjection> gibui(int id);

	List<ItemProjection> userBids(int id);

	void removeBid(int itemid, int userid);
}
