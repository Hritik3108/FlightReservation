package com.hritik.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hritik.flightreservation.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
