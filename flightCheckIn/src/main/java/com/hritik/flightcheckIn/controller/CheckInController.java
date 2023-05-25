package com.hritik.flightcheckIn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hritik.flightcheckIn.integration.ReservationRestClient;
import com.hritik.flightcheckIn.integration.dto.Reservation;
import com.hritik.flightcheckIn.integration.dto.ReservationUpdateRequest;

@Controller
public class CheckInController {

	@Autowired
	ReservationRestClient reservationClient;
	
	@RequestMapping("/showCheckIn")
	public String startCheckIn() {
		return "startCheckIN";
	}
	
	@RequestMapping("/startCheckIn")
	public String startCheck(@RequestParam("reservtionId")Long id,ModelMap modelmap) {
		Reservation Reservation = reservationClient.findReservation(id);
		modelmap.addAttribute("reservation", Reservation);
		return "displayReservationDetails";
	}
	
	@RequestMapping("/completeCheckIn")
	public String completeCheckIn(@RequestParam("reservtionId")Long id,
			@RequestParam("numberOfBags")int numberOfBags) {
		ReservationUpdateRequest request=new ReservationUpdateRequest();
		request.setId(id);
		request.setCheckedIn(true);
		request.setNumberOfBags(numberOfBags);
		reservationClient.updateReservation(request);
		return "checkInConfirmation";
	}
	
}	
