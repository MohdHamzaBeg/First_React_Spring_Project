package com.springframework.react.TheDivineCollections.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;
import com.springframework.react.TheDivineCollections.repository.ItemRepository;
import com.springframework.react.TheDivineCollections.repository.UserRepository;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void saveItem(Item item) {
		if(item.getBids()==null)
		item.setBids(new HashMap<Integer, User>());
		
		Random random = new Random();
		if(item.getId()==0)
			item.setId(random.nextInt());
		item.getBids().put(item.getBid(), item.getOwner());
		itemRepository.save(item);
		
	}

	@Override
	public List<ItemProjection> listofItems() {
		return itemRepository.findAllProjectedBy();
		// Added this ItemProjection because findAll() was fetching all the fields of each
		// item which was creating a loop in the JSON response due to owner field
		// Projection helps to retrieve only those fields of each item whicha are needed 
	}

	@Override
	public ItemProjection getbyId(int id) {
		return itemRepository.findByIdProjectedBy(id);
	}

	@Override
	public void updateBidbyId(int itemid, int newBid, int userid) {
		Item item = (Item) itemRepository.findById(itemid).get();
		User user = userRepository.findById(userid).orElse(null);
		if(item.getBids().containsValue(user)) {
		item.getBids().remove(item.getBid());
		}
		item.getBids().put(newBid, user);
		item.setBid(newBid);
		itemRepository.save(item);
	}
	
	
}
