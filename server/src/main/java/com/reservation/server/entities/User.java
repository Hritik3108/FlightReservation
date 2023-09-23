package com.reservation.server.entities;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "USER")
public class User extends AbstractEntity implements UserDetails{

	
	/**
	 * 
	 */
//	private static final long serialVersionUID = 1L;

//	@Column(name = "FIRSTNAME")
	private String firstName;
	
//	@Column(name = "LASTNAME")
	private String lastName;
	
//	@Column(name = "EMAIL")
	private String email;
	
//	@Column(name = "PASSWORD")
	private String password;
	
//	@ManyToMany
//	@JoinTable(name="USER_ROLE",joinColumns= @JoinColumn(name="USER_ROLE"),inverseJoinColumns=@JoinColumn(name="ROLE_ID"))
//	private Set<Role> roles;
	
	@NonNull
	@Enumerated(EnumType.STRING)
	  private Role role;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new SimpleGrantedAuthority(role.name()));
	}
	
	public String getFirstname() {
		// TODO Auto-generated method stub
		return firstName;
	}
	
	public String getLastname() {
		// TODO Auto-generated method stub
		return lastName;
	}
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
