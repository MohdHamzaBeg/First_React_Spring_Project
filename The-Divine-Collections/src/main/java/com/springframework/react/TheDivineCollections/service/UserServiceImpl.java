package com.springframework.react.TheDivineCollections.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;
import com.springframework.react.TheDivineCollections.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

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
}
