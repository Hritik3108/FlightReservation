import './index.scss'
import { useState,useEffect,useRef } from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import axios from "axios";
import { reservationContext } from '../context';
import divider from '../../assets/divider.png'
import takeoff from '../../assets/takeoff.png'
import landing from '../../assets/landing.png'

const Reservation = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem('mySelectedFlight')))
    const [reservation,setReservation] = useState({
        flightId:data.id,
        passengerFirstName:"",
        passengerLastName:"",
        passengerEmail:"",
        passengerPhone:"",
        nameOnTheCard:"",
        cardNumber:"",
        expirationDate:"",
        securityCode:""
    })
    const [receivedData,setReceivedData]=useState({    
            id: 0,
            checkedIn: "",
            numberOfBags: 0,
            passenger: {
                id: 0,
                firstName: "",
                lastName: "",
                middleName: "",
                email: "",
                phone: ""
            },
            flight: {
                id: 0,
                flightNumber: "",
                operatingAirlines: "",
                departureCity: "",
                arrivalCity: "",
                dateOfDeparture: 0,
                estimatedDepartureTime: 0
            }
    })
    const baseURL='/api/FlightReservation/api/v1/reservation/'
    const navigate = useNavigate();
    const refForm = useRef();

    async function handleSubmit(e){
        e.preventDefault()
        const sendData = {
            flightId:data.id,
            passengerFirstName:reservation.passengerFirstName,
            passengerLastName:reservation.passengerLastName,
            passengerEmail:reservation.passengerEmail,
            passengerPhone:reservation.passengerPhone,
            nameOnTheCard:reservation.nameOnTheCard,
            cardNumber:reservation.cardNumber,
            expirationDate:reservation.expirationDate,
            securityCode:reservation.securityCode
        }
        await axios.post(`${baseURL}showCompleteReservation`,sendData,
        {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': "Bearer "+localStorage.getItem('FRtoken')
            },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                setReceivedData(response.data)
                navigate('/reservation/confirm')
            }
        }).catch(function (error){
            console.log(error)
        })
    }

    function handleChange(event){
        const {name,value} = event.target
        setReservation(prev => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(()=>{
        localStorage.getItem('mySelectedFlight')===null?navigate('/searchflight'):null
    },[])

    return (
        <>
        <div className='heading'><h1>Complete Reservation </h1><br />
        {data.operatingAirlines } ({data.flightNumber})</div><br />
        <img src={divider} alt='divider' className='div-img' />
        <div className='loc-container'>
        <span className='dep'>{data.departureCity} <img src={takeoff} alt='takeoff' className='takeoff-img' /></span>  
        <span className='arr'><img src={landing} alt='landing' className='landing-img' />{data.arrivalCity}</span> <br/>
        </div><br/>

        <div className='loc-container2'>
            <span className='dep'>
                Departure City: {data.departureCity }
            </span>
            <span className='arr'>
            Arrival City: {data.arrivalCity }
            </span>
        </div>   

       { receivedData.id===0?
        <div className='form-cont'>
        <div className='form-box'>    
        <form ref={refForm} onSubmit={handleSubmit}>
        <h2>Passenger Details:</h2>
        <ul>
        <li>First Name:{" "}
            <input 
            type="text"
            placeholder="First Name" 
            name="passengerFirstName" 
            className='inputbox firstname' 
            onChange={handleChange} 
            value={reservation.passengerFirstName}
            /></li>
        <li>
        Last Name:{" "}
        <input 
            type="text" 
            placeholder='Last Name'
            name="passengerLastName" 
            className='inputbox lastname' 
            onChange={handleChange} 
            value={reservation.passengerLastName}
        /></li>
        <li>Email:{" "}
        <input 
            type="email" 
            placeholder='Email'
            name="passengerEmail" 
            className='inputbox email' 
            onChange={handleChange} 
            value={reservation.passengerEmail}
        /></li>
        <li>Phone:{" "}
        <input 
            type="text"
            placeholder='Phone Number' 
            name="passengerPhone" 
            className='inputbox phone' 
            onChange={handleChange} 
            value={reservation.passengerPhone}
        /></li>
        </ul>
        <h2>Card Details:</h2>
        <ul>
        <li>Name:{" "}
        <input 
            type="text"
            placeholder='Name on the card' 
            name="nameOnTheCard" 
            className='inputbox name' 
            onChange={handleChange} 
            value={reservation.nameOnTheCard}
            /></li>
        <li>Card No:{" "}
        <input 
            type="text" 
            placeholder='Card Number'
            name="cardNumber" 
            className='inputbox card' 
            onChange={handleChange} 
            value={reservation.cardNumber}
        /></li>
        <li>Expiry Date:{" "}
        <input 
            type="date" 
            name="expirationDate" 
            placeholder='Expiry Date'
            className='inputbox' 
            onChange={handleChange} 
            value={reservation.expirationDate}
        /></li>
        <li>CVV:{" "}
        <input 
            type="text"
            placeholder='Secret Code' 
            name="securityCode" 
            className='inputbox' 
            onChange={handleChange} 
            value={reservation.securityCode}
        /></li>
        <li><input 
            className='submit-btn' 
            type="submit" 
            value="CONFIRM" 
        /></li>
        </ul>
	</form></div></div>:""}
    
    <reservationContext.Provider value={receivedData}>
        <Outlet />
    </reservationContext.Provider>


    </>
    )
}
export default Reservation;