package com.reservation.server.services;

import com.reservation.server.dto.ReservationRequest;
import com.reservation.server.entities.Reservation;

public interface ReservationService {

	public Reservation bookFlight(ReservationRequest request);
}
