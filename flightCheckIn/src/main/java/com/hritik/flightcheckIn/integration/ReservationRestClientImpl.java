package com.hritik.flightcheckIn.integration;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.hritik.flightcheckIn.integration.dto.Reservation;
import com.hritik.flightcheckIn.integration.dto.ReservationUpdateRequest;

@Component
public class ReservationRestClientImpl implements ReservationRestClient {

	private static final String FLIGHT_RESERVATION_URI = "http://localhost:8080/FlightReservation/reservations";

	@Override
	public Reservation findReservation(Long id) {
		RestTemplate restTemplate=new RestTemplate();
		Reservation reservation= restTemplate.getForObject(FLIGHT_RESERVATION_URI+"/"+id, Reservation.class);
		return reservation;
	}

	@Override
	public Reservation updateReservation(ReservationUpdateRequest request) {
		RestTemplate restTemplate=new RestTemplate();
		Reservation postForObject = restTemplate.postForObject(FLIGHT_RESERVATION_URI, request, Reservation.class);
		return postForObject;
	}

}
