package com.springframework.react.TheDivineCollections.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;
import com.springframework.react.TheDivineCollections.repository.ItemRepository;
import com.springframework.react.TheDivineCollections.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ItemRepository itemRepository;

	@Override
	public void saveUser(User user) {
		if(user.getMyitems()==null)
			user.setMyitems(new ArrayList<>());
		
		Random random = new Random();
		if(user.getId()==0)
			user.setId(random.nextInt());
		userRepository.save(user);
	}

	@Override
	public User getUserbyId(String email, String password) {
		User founduser = userRepository.findByEmailAndPassword(email, password);
		if(founduser!=null)
		return founduser;
		else
		return null;
			
	}

	@Override
	public List<ItemProjection> gibui(int id) {
		return userRepository.findByUserId(id);
		
	}

	@Override
	public List<ItemProjection> userBids(int id) {
		return userRepository.findBidsByUserId(id);
	}
	public int getKey(Map<Integer, User> map, User value) {
        for (Map.Entry<Integer, User> entry : map.entrySet()) {
            if (entry.getValue().equals(value)) {
                return entry.getKey();
            }
        }
        return 0; // Return null if no matching key is found
    }
	@Override
	public void removeBid(int itemid, int userid) {
		Item item = (Item) itemRepository.findById(itemid).get();
		User user = userRepository.findById(userid).get();
		
		Integer latestbid = getKey(item.getBids(), user);
		
		item.getListofbids().remove(latestbid);
		
		item.setListofbids(item.getListofbids());
		System.out.println("reached");
			
		item.setBid(item.getListofbids().get(item.getListofbids().size()-1));
		user.setMybids(null);
		item.setBids(null);// It works, but how, is unexplainable
		
		userRepository.save(user);
		itemRepository.save(item);
		
	}
}
