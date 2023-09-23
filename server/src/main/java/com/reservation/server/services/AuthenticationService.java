package com.reservation.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.reservation.server.entities.AuthenticationRequest;
import com.reservation.server.entities.AuthenticationResponse;
import com.reservation.server.entities.RegisterRequest;
import com.reservation.server.entities.Token;
import com.reservation.server.entities.TokenType;
import com.reservation.server.entities.User;
import com.reservation.server.jwt.JwtService;
import com.reservation.server.repos.TokenRepository;
import com.reservation.server.repos.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	@Autowired
	 private  UserRepository repository;
	@Autowired
	 private  PasswordEncoder passwordEncoder;
	 @Autowired
	 private  JwtService jwtService;
	 @Autowired
	 private  AuthenticationManager authenticationManager;
	 @Autowired
	 private TokenRepository tokenRepository;

	public AuthenticationResponse register(User request) {
		// TODO Auto-generated method stub
//		var user = User.builder()
//		        .firstName(request.getFirstname())
//		        .lastName(request.getLastname())
//		        .email(request.getEmail())
//		        .password(passwordEncoder.encode(request.getPassword()))
//		        .role(request.getRole())
//		        .build();
		User newUser=new User(request.getFirstname(),request.getLastname(),request.getEmail(),
				passwordEncoder.encode(request.getPassword()),request.getRole());
		repository.save(newUser);
//		System.out.println(request.getFirstname()+" "+request.getEmail());
		var jwtToken = jwtService.generateToken(newUser);
		
		var refreshToken = jwtService.generateRefreshToken(newUser);
		saveUserToken(newUser, jwtToken);
		
		return AuthenticationResponse.builder()
		        .accessToken(jwtToken).refreshToken(refreshToken).build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {
		 authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
		            request.getEmail(),
		            request.getPassword()
		        ));
		 User user = repository.findByEmail(request.getEmail());
		    if (user==null) {
		        throw new Exception("User not found");
		    }
		    
		 var jwtToken = jwtService.generateToken(user); 
		 
		 var refreshToken = jwtService.generateRefreshToken(user);
		 revokeAllUserTokens(user);
		 saveUserToken(user, jwtToken);
		 
		return  AuthenticationResponse.builder()
		        .accessToken(jwtToken).refreshToken(refreshToken).build();
	}
	
	private void saveUserToken(User user, String jwtToken) {
	    var token = Token.builder()
	        .user(user)
	        .token(jwtToken)
	        .tokenType(TokenType.BEARER)
	        .expired(false)
	        .revoked(false)
	        .build();
	    tokenRepository.save(token);
	  }

	  private void revokeAllUserTokens(User user) {
	    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
	    if (validUserTokens.isEmpty())
	      return;
	    validUserTokens.forEach(token -> {
	      token.setExpired(true);
	      token.setRevoked(true);
	    });
	    tokenRepository.saveAll(validUserTokens);
	  }

	  public void refreshToken(
	          HttpServletRequest request,
	          HttpServletResponse response
	  ) throws Exception {
	    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
	    final String refreshToken;
	    final String userEmail;
	    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
	      return;
	    }
	    refreshToken = authHeader.substring(7);
	    userEmail = jwtService.extractUsername(refreshToken);
	    if (userEmail != null) {
	      var user = this.repository.findByEmail(userEmail);
	              if(user==null) {
	            	  throw new Exception("User not found");
	              }
	      if (jwtService.isTokenValid(refreshToken, user)) {
	        var accessToken = jwtService.generateToken(user);
	        revokeAllUserTokens(user);
	        saveUserToken(user, accessToken);
	        var authResponse = AuthenticationResponse.builder()
	                .accessToken(accessToken)
	                .refreshToken(refreshToken)
	                .build();
	        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
	      }
	    }
	  }

}

//fliter controller config role 
