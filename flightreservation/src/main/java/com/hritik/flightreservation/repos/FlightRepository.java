package com.hritik.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hritik.flightreservation.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long> {

}
