package com.reservation.server.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reservation.server.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

}
