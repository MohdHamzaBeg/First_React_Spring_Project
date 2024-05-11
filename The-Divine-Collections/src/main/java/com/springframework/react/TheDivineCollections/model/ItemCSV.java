package com.springframework.react.TheDivineCollections.model;

import com.opencsv.bean.CsvBindByName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemCSV {
	
	@CsvBindByName
	private Integer id;
	
	@CsvBindByName
	private String name;
	
	@CsvBindByName
	private Integer age;
	
	@CsvBindByName
	private String description;
}
