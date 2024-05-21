package com.springframework.react.TheDivineCollections.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springframework.react.TheDivineCollections.model.Item;
import com.springframework.react.TheDivineCollections.projection.ItemProjection;

public interface ItemRepository extends JpaRepository<Item, Integer>{
    @Query("SELECT i.id as id, i.name as name, i.age as age, i.description as description, i.bid as bid FROM Item i")
    List<ItemProjection> findAllProjectedBy();
    
    @Query("SELECT i.id as id, i.name as name, i.age as age, i.description as description, i.bid as bid FROM Item i WHERE i.id = :itemId" )
    ItemProjection findByIdProjectedBy(int itemId);
}
