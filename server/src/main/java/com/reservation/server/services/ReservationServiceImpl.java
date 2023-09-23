package com.reservation.server.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reservation.server.dto.ReservationRequest;
import com.reservation.server.entities.Flight;
import com.reservation.server.entities.Passenger;
import com.reservation.server.entities.Reservation;
import com.reservation.server.repos.FlightRepository;
import com.reservation.server.repos.PassengerRepository;
import com.reservation.server.repos.ReservationRepository;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	PassengerRepository passengerRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@Override
	public Reservation bookFlight(ReservationRequest request) {
		
		Long flightId=request.getFlightId();
		Optional<Flight> flight=flightRepository.findById(flightId);
		
		Passenger passenger=new Passenger();
		passenger.setFirstName(request.getPassengerFirstName());
		passenger.setLastName(request.getPassengerLastName());
		passenger.setEmail(request.getPassengerEmail());
		passenger.setPhone(request.getPassengerPhone());
		Passenger savedPassenger=passengerRepository.save(passenger);
		
		Reservation reservation=new Reservation();
		reservation.setFlight(flight.get());
		reservation.setPassenger(savedPassenger);
		reservation.setCheckedIn(false);
		Reservation savedReservation=reservationRepository.save(reservation);
		
		return savedReservation;
	}

}
