import './index.scss'
import {useState, useRef, useEffect} from 'react'
import axios from "axios";
import {useNavigate,Outlet} from 'react-router-dom'
import { flightContext } from '../context';
import ticket from '../../assets/ticket.png'

const Search = () => {

    //TODO -> Sorting of flights to display
    const [err,setErr] = useState("")
    const refForm = useRef()
    const baseURL='/api/FlightReservation/api/v1/reservation/'
    const [searchData,setSearchData] = useState({
        from:"",
        to:"",
        departureDate:""
    })
    const[flights,setFlights] = useState([])
    const navigate = useNavigate();

    async function handleOnSubmit(e){
        e.preventDefault()
        const data = {
            from: searchData.from,
            to: searchData.to,
            departureDate: searchData.departureDate
        }
        await axios.post(`${baseURL}search`,data,
        {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': "Bearer "+localStorage.getItem('FRtoken')
            },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                setFlights(response.data)
                navigate('/searchflight/flights')
            }
        }).catch(function (error){
            setErr("No Flight Available")
            console.log(error)
        })
    }

    function handleChange(event){
        const {name,value} = event.target
        setSearchData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(()=>{
        localStorage.getItem('FRtoken')===null?navigate('/signin'):null
    },[])

    return (
        <>
        <img src={ticket} alt='icon' className='ticket-img' />
        <div className='form-container'>
            <h2>Search Flight</h2>
            <div className='form'>
            <form ref={refForm} onSubmit={handleOnSubmit}>
            <ul>
            <li><input
                className='inputbox boarding'
                type='text'
                placeholder='From'
                name='from'
                value={searchData.from}
                onChange={handleChange}
                required
                />
            {/* </li>
            <li>  */}
                <input
                className='inputbox arrival' 
                type='text'
                placeholder='To'
                name='to'
                value={searchData.to}
                onChange={handleChange}
                required
                />
            {/* </li>
            <li>  */}
                <input
                className='inputbox date' 
                type='date'
                placeholder='Date'
                name='departureDate'
                value={searchData.departureDate}
                onChange={handleChange}
                required
                />
               
            {/* </li>
            <li> */}
                <input
                className='submit-btn' 
                type='submit'
                value='Search'
                />
            </li>
            </ul>
            </form>
            </div>  
        </div>
        


        <flightContext.Provider value={flights}>
        <Outlet />
        </flightContext.Provider>
        </>
    );
}

export default Search;