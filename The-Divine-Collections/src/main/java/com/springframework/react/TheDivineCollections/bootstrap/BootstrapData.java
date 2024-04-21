package com.springframework.react.TheDivineCollections.bootstrap;

import java.util.Random;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.repository.ItemRepository;
import com.springframework.react.TheDivineCollections.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class BootstrapData implements CommandLineRunner{
	
	private final UserRepository userRepository;
	
	private final ItemRepository itemRepository;
	
	@Override
	public void run(String... args) throws Exception{
		forUsers();
		forItems();
	}
	Random random = new Random();
	private void forItems() {
		if(itemRepository.count()==0) {
			Item i1 = Item.builder()
					.id(random.nextInt())
					.name("MonaLisa Portrait")
					.age(3000)
					.description("Winking MonaLisa from the Kaliphat Empire")
					.build();
		}
		
	}

	private void forUsers() {
		if(userRepository.count()==0) {
			User u1 = User.builder()
					.id(random.nextInt())
					.name("Hamza")
					.email("hamzabillion@gmail.com")
					.password("adadadadadadad")
					.number("6787567675")
					.build();
		}
	}
	
}
