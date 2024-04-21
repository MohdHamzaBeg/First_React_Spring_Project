package com.springframework.react.TheDivineCollections.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemRepository itemRepository;

	@Override
	public void saveItem(Item item) {
		Random random = new Random();
		if(item.getId()==0)
			item.setId(random.nextInt());
		itemRepository.save(item);
		
	}
	
	
}
