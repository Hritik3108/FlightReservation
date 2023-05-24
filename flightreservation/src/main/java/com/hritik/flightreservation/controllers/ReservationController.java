package com.hritik.flightreservation.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hritik.flightreservation.dto.ReservationRequest;
import com.hritik.flightreservation.entities.Flight;
import com.hritik.flightreservation.entities.Reservation;
import com.hritik.flightreservation.repos.FlightRepository;
import com.hritik.flightreservation.services.ReservationService;

@Controller
public class ReservationController {

	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	ReservationService reservationService;
	
	@RequestMapping("/showCompleteReservation")
	public String showRegistration(@RequestParam("flightId")Long flightId,ModelMap modelMap) {
		Optional<Flight> flight = flightRepository.findById(flightId);
		System.out.println(flight.get().getId());
		modelMap.addAttribute("flight",flight);
		return "CompleteReservation";
	}
	
	@RequestMapping(value="completeReservation",method=RequestMethod.POST)
	public String completeResgstration(ReservationRequest request,ModelMap modelmap) {
		Reservation reservation = reservationService.bookFlight(request);
		modelmap.addAttribute("msg","Reservation successful with id"+reservation.getId());
		return "reservationConfirmation";
	}
}