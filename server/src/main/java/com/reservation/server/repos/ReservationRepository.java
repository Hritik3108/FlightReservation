package com.reservation.server.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reservation.server.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
