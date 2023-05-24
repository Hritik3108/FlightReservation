package com.hritik.flightreservation.services;

import com.hritik.flightreservation.dto.ReservationRequest;
import com.hritik.flightreservation.entities.Reservation;

public interface ReservationService {
	
	public Reservation bookFlight(ReservationRequest request);
	
}
