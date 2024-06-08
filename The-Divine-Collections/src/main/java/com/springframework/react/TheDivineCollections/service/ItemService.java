package com.springframework.react.TheDivineCollections.service;

import java.util.List;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;

public interface ItemService {
	void saveItem(Item item);
	
	List<ItemProjection> listofItems();
	
	ItemProjection getbyId(int id);

	void updateBidbyId(int itemid, int newBid, int user);

	void deletebyitemId(int id);
}
