package com.springframework.react.TheDivineCollections.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springframework.react.TheDivineCollections.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer>{

}
