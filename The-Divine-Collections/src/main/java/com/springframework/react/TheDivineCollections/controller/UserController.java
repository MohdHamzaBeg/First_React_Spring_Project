package com.springframework.react.TheDivineCollections.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.springframework.react.TheDivineCollections.service.UserService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class UserController {
	
	private final UserService userService;
	
	@PostMapping("/saveUser")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		User savedUser = userService.saveUser(user);
		if(savedUser==null)
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		else
			return new ResponseEntity<>(HttpStatus.OK);
	} // This method throws the internal server error but working properly because
	// I am using another port for the view and springboot is unable to resolve that
	// where is this view coming from
	
	@GetMapping("getuser/{email}/{password}")
	public ResponseEntity<User> getUserbydetails(@PathVariable String email, @PathVariable String password) {
		User user = userService.getUserbyId(email, password);
		if(user!=null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("itemsbyId/{id}")
	public ResponseEntity<List<ItemProjection>> getitemsbyUserID(@PathVariable int id){
		List<ItemProjection> userItems = userService.gibui(id);
		if(!userItems.isEmpty())
			return new ResponseEntity<>(userItems, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	@GetMapping("userBidsbyId/{id}")
	public ResponseEntity<List<ItemProjection>> getuserBidbyUserId(@PathVariable int id){
		List<ItemProjection> userBids = userService.userBids(id);
		if(!userBids.isEmpty())
			return new ResponseEntity<>(userBids, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	@GetMapping("/deleteuserBid/{itemid}/{userid}")
	public ResponseEntity<Item> removeUserBid(@PathVariable("itemid") int itemid,
    									  	 @PathVariable("userid") int userid){
		try {
    		userService.removeBid(itemid, userid);
    		return new ResponseEntity<>(HttpStatus.OK);
    	}
    	catch(Exception e) {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	
    	}
	}
}
