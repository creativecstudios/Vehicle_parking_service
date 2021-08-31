package com.example.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.modle.VehicleParkingService;
import com.example.service.VehicleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javassist.NotFoundException;

@RestController
@CrossOrigin
@RequestMapping(value = "/vehi")
public class VehicleController extends ResponseEntityExceptionHandler{

	Logger log = LoggerFactory.getLogger(VehicleController.class);
	
	@Autowired
	VehicleService service;
	
	//get all data
	@GetMapping
	public ResponseEntity<List<VehicleParkingService>> getvehi(){
		try {
			log.info("path : /vehi, method : GET, httpstatus : "+HttpStatus.OK+"VehicleController, getvehi(), api called for vehicle details" );
			return service.getvehi();
		}
		catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,"No records found",e);
		}
	}
	//save data
	@PostMapping
	public ResponseEntity<Object> uploaddata(@RequestBody VehicleParkingService vehi) {
		try {
			log.info("path : /vehi, method : POST, httpstatus : "+HttpStatus.CREATED+"VehicleController, uploaddata(VehicleParkingService vehi), api called to save/create data" );
			return service.uploaddata(vehi);
		}
		catch(Exception e){
//			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body(e);
			throw new ResponseStatusException(
			           HttpStatus.NOT_FOUND, "Something went wrong try again", e);
		}
	}
	
	//delete data
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Object> deleteVehi(@PathVariable Integer id) {
		try {
			log.info("path : /vehi, method : DELETE, httpstatus : "+HttpStatus.OK+"VehicleController, deleteVehi(Integer "+id+"), api called to delete data" );
			return service.delete(id);
		}
		catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, PAGE_NOT_FOUND_LOG_CATEGORY,e);
		}
	}
	
	//update
	@PutMapping
	public ResponseEntity<Object> updatevehi(@RequestBody VehicleParkingService vehi){
		try {
			log.info("path : /vehi, method : PUT, httpstatus : "+HttpStatus.OK+"VehicleController, updatevehi(VehicleParkingService vehi), api called to update data" );
			return service.update(vehi);
		}
		catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_MODIFIED,"Not modified",e);
		}
	}
	
	//get-by-id
	@GetMapping(value = "/{id}")
	public ResponseEntity<Object> getById(@PathVariable Integer id) {
		log.info("path : /vehi, method : GET, httpstatus : "+HttpStatus.OK+"VehicleController, getById(Integer "+id +"), api called to get particular data by id" );
		return service.getById(id);
	}
}
