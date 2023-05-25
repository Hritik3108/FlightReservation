package com.hritik.flightreservation.services;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hritik.flightreservation.dto.ReservationRequest;
import com.hritik.flightreservation.entities.Flight;
import com.hritik.flightreservation.entities.Passenger;
import com.hritik.flightreservation.entities.Reservation;
import com.hritik.flightreservation.repos.FlightRepository;
import com.hritik.flightreservation.repos.PassengerRepository;
import com.hritik.flightreservation.repos.ReservationRepository;
import com.hritik.flightreservation.util.EmailUtil;
import com.hritik.flightreservation.util.PDFGenerator;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	PassengerRepository passengerRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@Autowired
	PDFGenerator pdfGenerator;
	
	@Autowired
	EmailUtil emailUtil;
	
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
//		reservation.setNumberOfBags(1);
		
		Reservation savedReservation=reservationRepository.save(reservation);
		
		//email
		String filePath="C:\\Users\\Hritik\\Desktop\\PDFG"+savedReservation.getPassenger().getFirstName()+".pdf";
		pdfGenerator.generateItineary(savedReservation, filePath);
		emailUtil.sendItinerary(savedReservation.getPassenger().getEmail(), filePath);
		
		return savedReservation;
	}

}
