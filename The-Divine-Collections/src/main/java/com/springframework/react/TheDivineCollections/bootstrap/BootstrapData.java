package com.springframework.react.TheDivineCollections.bootstrap;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;
import java.util.Random;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import com.opencsv.bean.CsvToBeanBuilder;
import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.ItemCSV;
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
		
		forItemCSV();
		forUsers();
		//forItems();
	}
	
	private void forItemCSV() throws FileNotFoundException {
		if(itemRepository.count()==0) {
			File file = ResourceUtils.getFile("classpath:csvdata/ItemCSV.csv");
			List<ItemCSV> recs = convertCSV(file);
			
			recs.forEach(itemCSV->{
				itemRepository.save(Item.builder()
						.id(itemCSV.getId())
						.age(itemCSV.getAge())
						.name(itemCSV.getName())
						.description(itemCSV.getDescription())
						.build());
			});
		}
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
	
	private List<ItemCSV> convertCSV(File csvFile) {// Basically converting CSV data into POJOs
		try {
			List<ItemCSV> itemcsvrecords = new CsvToBeanBuilder<ItemCSV>(new FileReader(csvFile))
					.withType(ItemCSV.class)
					.build().parse();
			return itemcsvrecords;
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}
