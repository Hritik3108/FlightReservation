package com.hritik.flightcheckIn.integration;

import com.hritik.flightcheckIn.integration.dto.Reservation;
import com.hritik.flightcheckIn.integration.dto.ReservationUpdateRequest;

public interface ReservationRestClient {

	public Reservation findReservation(Long id);
	
	public Reservation updateReservation(ReservationUpdateRequest request);
}
