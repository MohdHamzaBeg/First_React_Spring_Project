package com.springframework.react.TheDivineCollections.service;

import java.util.List;

import com.springframework.react.TheDivineCollections.model.Item;

public interface ItemService {
	void saveItem(Item item);
	
	List<Item> listofItems();
	
	Item getbyId(int id);
}
