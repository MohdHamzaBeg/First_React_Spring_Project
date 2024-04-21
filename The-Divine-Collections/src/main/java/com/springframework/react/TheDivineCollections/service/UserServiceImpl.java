package com.springframework.react.TheDivineCollections.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void saveUser(User user) {
		Random random = new Random();
		if(user.getId()==0)
			user.setId(random.nextInt());
		userRepository.save(user);
	}
}
