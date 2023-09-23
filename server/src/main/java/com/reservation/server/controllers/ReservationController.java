package com.reservation.server.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reservation.server.dto.ReservationRequest;
import com.reservation.server.dto.SearchData;
import com.reservation.server.entities.Flight;
import com.reservation.server.entities.Reservation;
import com.reservation.server.repos.FlightRepository;
import com.reservation.server.services.ReservationService;
import com.reservation.server.util.FormatDate;

@RestController
@RequestMapping("/api/v1/reservation")
public class ReservationController {


	@Autowired
	private FlightRepository flightRepository;
	
	@Autowired
	private ReservationService reservationService;

	
	@PostMapping(path = "/search")
	public List<Flight> findFlights(@RequestBody SearchData data) {
		FormatDate fd = new FormatDate();
		String reversedDate=fd.reverseString(data.getDepartureDate());
		String pattern = "MM-dd-yyyy";
		SimpleDateFormat formatter = new SimpleDateFormat(pattern);
		try {
			Date date = formatter.parse(reversedDate);
			List<Flight> flights = flightRepository.findFlights(data.getFrom(), data.getTo(), date);
			return flights;
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@PostMapping("/showCompleteReservation")
	public ResponseEntity<Reservation> completeReservation(@RequestBody ReservationRequest request) {
		Reservation reservation = reservationService.bookFlight(request);
		return ResponseEntity.ok(reservation);
	}
}
