# FlightReservation
A Fullstack project for flight reservation with responsive frontend, spring security, jwt authorization and springboot framework.
# Quickstart
Clone the repository
Open the project in your IDE: Spring tool suite (recommended) or Eclipse
If you are using IntelliJ IDEA, make sure the IDE recognizes the project as a Spring Boot project. Also, you must change the working directory of the project so that the views (the actual web pages to be shown) are found by Spring Boot (check out Web Directories IntelliJ IDEA.
Make sure you are in the server directory
Configure the database connection in application.properties file (check the Database section below for more info)
Run the server (by running the main method in ServerApplication.java)
After starting the server start the client by npm run dev.
Open in your browser!
Make sure to configure web configuration according to your needs.

# Database
MySQL or MariaDB can be used as the database for this project. The database connection can be configured in the application.properties file, with the appropriate values for the following properties:

    spring.datasource.url=jdbc:mysql://[ip address of db]:[port of db]/reservation?createDatabaseIfNotExist=true
    spring.datasource.username=[username]
    spring.datasource.password=[password, if any]
Having done that, you can create some base data in the database.
After this open client directory
run npm install or whichever package manager you want from cli then run the client side of the project
# Endpoints
http://localhost:8080/FlightReservation/
http://localhost:8080/FlightReservation/api/v1/auth/register
http://localhost:8080/FlightReservation/api/v1/auth/authenticate
http://localhost:8080/FlightReservation/api/v1/Reservation/search
http://localhost:8080/FlightReservation/api/v1/Reservation/showCompleteReservation
http://localhost:8080/FlightReservation/api/v1/auth/logout

#Preview
![Screenshot (186)](https://github.com/Hritik3108/FlightReservation/assets/126381615/8207a196-056e-4300-850f-76fd8b8f46f2)
![Screenshot (188)](https://github.com/Hritik3108/FlightReservation/assets/126381615/7a7e74c5-0302-4b2e-8b03-ffcb38223af6)
![Screenshot (187)](https://github.com/Hritik3108/FlightReservation/assets/126381615/1ac5f07b-e948-4ced-a2de-dadccbc51f86)
![Screenshot (189)](https://github.com/Hritik3108/FlightReservation/assets/126381615/6255dfa5-8ce2-4de2-b3eb-e163abb362fd)
![Screenshot (190)](https://github.com/Hritik3108/FlightReservation/assets/126381615/ad1e4d0c-ded9-46d5-bbd4-14c5020d77e4)
![Screenshot (191)](https://github.com/Hritik3108/FlightReservation/assets/126381615/aa967854-26fd-442c-b912-52505cc85904)
![Screenshot (192)](https://github.com/Hritik3108/FlightReservation/assets/126381615/b656f6ed-9f73-43ae-9f23-8bf415686993)
![Screenshot (194)](https://github.com/Hritik3108/FlightReservation/assets/126381615/c6ea5c39-e873-4b11-a55b-065454a39135)

