package com.hritik.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hritik.flightreservation.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
