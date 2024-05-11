package com.springframework.react.TheDivineCollections.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springframework.react.TheDivineCollections.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	 User findByEmailAndPassword(String email, String password);
}
