package com.springframework.react.TheDivineCollections.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.model.User;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("SELECT i.id as id, i.name as name, i.age as age, i.description as description, i.bid as bid FROM Item i WHERE i.owner.id = :userId")
    List<ItemProjection> findByUserId(int userId);
	
	 User findByEmailAndPassword(String email, String password);
}
