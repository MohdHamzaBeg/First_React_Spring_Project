package com.springframework.react.TheDivineCollections.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;
import com.springframework.react.TheDivineCollections.service.ItemService;
import com.springframework.react.TheDivineCollections.service.UserService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class ItemController {
	
	private final ItemService itemService;
	
    @GetMapping("/allitems")
    public ResponseEntity<List<ItemProjection>> getAllItems() {
        List<ItemProjection> items = itemService.listofItems();
        if(items.size()>1)
        return new ResponseEntity<>(items, HttpStatus.OK);
        else
        	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/getbyID/{id}")
    public ResponseEntity<ItemProjection> getItembyId(@PathVariable("id") int id){
    	return new ResponseEntity<ItemProjection>(itemService.getbyId(id), HttpStatus.OK);
    }
    @PostMapping("/saveItem")
    public void saveItem(@RequestBody Item item){
    	itemService.saveItem(item);
    }
    @PostMapping("/updateBid/{userid}/{itemid}/{newBid}")
    public ResponseEntity<Item> updateBid(@PathVariable("newBid") int newBid,
    									  @PathVariable("itemid") int itemid,
    									  @PathVariable("userid") int userid){
    	
    	itemService.updateBidbyId(itemid, newBid, userid);
    	return new ResponseEntity<Item>(HttpStatus.OK);
    }
    @DeleteMapping("/deletebyId/{id}")
    public ResponseEntity<Item> deletebyId(@PathVariable("id") int id){
    	try {
    		itemService.deletebyitemId(id);
    		return new ResponseEntity<>(HttpStatus.OK);
    	}
    	catch(Exception e) {
    		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    	}
    }
}
