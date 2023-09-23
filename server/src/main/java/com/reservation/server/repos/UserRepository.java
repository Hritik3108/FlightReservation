package com.reservation.server.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reservation.server.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);

}
