<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Reservation Review</title>
</head>
<body>

<h2>Flight Details:</h2>
	Airline: ${reservation.flight.operatingAirlines } <br />
	Flight Number: ${reservation.flight.flightNumber } <br />
    Departure City: ${reservation.flight.departureCity }<br /> 
	Arrival City: ${reservation.flight.arrivalCity }<br />
	Date Of Departure: ${reservation.flight.dateOfDeparture } <br />
	Estimate Departure Time: ${reservation.flight.estimatedDepartureTime } <br />

<h2>Passenger Details:</h2>

First Name:${reservation.passenger.firstName }<br/>
Last Name:${reservation.passenger.lastName }<br/>
Email:${reservation.passenger.email }<br/>
Phone:${reservation.passenger.phone }<br/>

<form action="completeCheckIn" method="post">
Enter the number of bags you want to checkIn:<input type="text" name="numberOfBags"/>
<input type="hidden" value="${reservation.id }" name="reservtionId"/>
<input type="submit" value="check In"/>
</form>

</body>
</html>