package com.springframework.react.TheDivineCollections.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.service.ItemService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class ItemController {
	
	private final ItemService itemService;
	
    @GetMapping("/allitems")
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.listofItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
    
    @GetMapping("/getbyID/{id}")
    public ResponseEntity<Item> getItembyId(@PathVariable("id") int id){
    	return new ResponseEntity<Item>(itemService.getbyId(id), HttpStatus.OK);
    }
}
