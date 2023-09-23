import './index.scss'
import divider from '../../assets/divider.png'
import pinpoint from '../../assets/pinpoint.png'
import takeoff from '../../assets/takeoff.png'
import landing from '../../assets/landing.png'
import calender from '../../assets/calender.png'
import time from '../../assets/time.png'

const FlightCard = (props) => {
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        
        return formattedDate;
      }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        
        return formattedTime;
      }  
    
    return (
        <div className='card-Container'>
        <div className='flight-Card'>
            <div> 
                <span>{props.operatingAirlines} ({props.flightNumber})</span>
                <img src={pinpoint} alt='pinpint' className='pin-img' /><br/>
                <img src={divider} alt='divider' className='div-img' />
                <div className='loc-container'>
                <span className='dep'>{props.departureCity} <img src={takeoff} alt='takeoff' className='takeoff-img' /></span>  
                <span className='arr'><img src={landing} alt='landing' className='landing-img' />{props.arrivalCity}</span> <br/>
                </div><br/>
                 <div className='dd'> <img src={calender} alt="date" className='calender-img' />
                 <span className='dd-span'>{" "}{formatDate(props.dateOfDeparture)}</span> </div> <br/>
                <div className='ed'>
                <img src={time} alt='estimated Time' className='time-img'/>
                    {" "}Estimated Travel Time {formatTime(props.estimatedDepartureTime)}
                </div> 
            </div>
        </div>
        <button className='selected-btn' onClick={() => {props.flightSelected(props)}} >Select</button> 
        </div>
    )
}

export default FlightCard;