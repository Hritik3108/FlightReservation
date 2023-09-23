package com.reservation.server.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FormatDate {
	
	public String reverseString(String inputDate) {
        if (inputDate == null || inputDate.isEmpty()) {
            return inputDate;
        }
        try {
            // Define the input and output date formats
            SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MM-yyyy");

            // Parse the input date string
            Date date = inputFormat.parse(inputDate);

            // Format the date to the desired output format
            String formattedDate = outputFormat.format(date);

            return formattedDate;
        } catch (ParseException e) {
            e.printStackTrace();
            // Handle parsing errors here if needed
            return null;
        }
    }

}
