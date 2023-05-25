package com.hritik.flightreservation.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hritik.flightreservation.dto.ReservationUpdateRequest;
import com.hritik.flightreservation.entities.Reservation;
import com.hritik.flightreservation.repos.ReservationRepository;

@RestController
public class ReservationRestController {

	@Autowired
	ReservationRepository reservationRepository;
	
	@RequestMapping("/reservations/{id}")
	public Reservation findReservation(@PathVariable("id")Long id) {
		Optional<Reservation> r=reservationRepository.findById(id);
		return r.get();
	}
	
	@RequestMapping("/reservations")
	public Reservation updateReservation(@RequestBody ReservationUpdateRequest request) {
		Optional<Reservation> r=reservationRepository.findById(request.getId());
		Reservation updateReservation=r.get();
		updateReservation.setCheckedIn(request.isCheckedIn());
		updateReservation.setNumberOfBags(request.getNumberOfBags());
		return reservationRepository.save(updateReservation);
	}
	
}
