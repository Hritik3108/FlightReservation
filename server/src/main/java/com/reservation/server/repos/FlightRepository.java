package com.reservation.server.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.reservation.server.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long> {

	@Query("from Flight f where f.departureCity=:departureCity and f.arrivalCity=:arrivalCity and f.dateOfDeparture=:dateOfDeparture")
	List<Flight> findFlights(@Param("departureCity") String from, @Param("arrivalCity") String to,
			 @Param("dateOfDeparture") Date departureDate);

}