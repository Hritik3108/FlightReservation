package com.reservation.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reservation.server.entities.AuthenticationRequest;
import com.reservation.server.entities.AuthenticationResponse;
import com.reservation.server.entities.RegisterRequest;
import com.reservation.server.entities.User;
import com.reservation.server.services.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	
	@Autowired
	private AuthenticationService service;

	@PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody User request
	  ) {
//		System.out.println(request.getFirstname()+" "+ request.getLastname()+" "+request.getEmail());
	    return ResponseEntity.ok(service.register(request));
	  }
	  
	  @PostMapping("/authenticate")
	  public ResponseEntity<AuthenticationResponse> authenticate(
	      @RequestBody AuthenticationRequest request
	  ) throws Exception {
	    return ResponseEntity.ok(service.authenticate(request));
	  }
	  
	  @PostMapping("/refresh-token")
	  public void refreshToken(
	      HttpServletRequest request,
	      HttpServletResponse response
	  ) throws Exception {
	    service.refreshToken(request, response);
	  }  
}
