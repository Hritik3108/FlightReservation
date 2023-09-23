import './index.scss'
import { myReservation } from '../context';

const Confirmation = () => {
    const confirmedData=myReservation();
    console.log('confirmation page '+confirmedData.passenger.firstName)
    return(
        <>
        <div className='msg'>
            Reservation Successful with id {confirmedData.id}<br />
            Iternary Email is sent to {confirmedData.passenger.email}
        </div>
        </>
    )
}

export default Confirmation;