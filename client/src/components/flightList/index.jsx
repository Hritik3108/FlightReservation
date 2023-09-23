import './index.scss'
import { myFlight} from '../context'
import FlightCard from '../flightCard'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FlightList = () => {
    const data=myFlight()
    const navigate=useNavigate()
    
    function selected(flightData){
        const str = JSON.stringify(flightData)
        localStorage.setItem('mySelectedFlight',str)
        navigate('/reservation')
    }
    
    useEffect(()=>{
        
    })

    const List = data.map(item => {
        return (
        <div className='list' key="{item.id}">
            <FlightCard {...item} flightSelected={selected} />
        </div>
        )
    })
    
    return (
        <>
        {
            List.length===0?
            <h1 className='h2-flightList'>No Available Flight</h1>:
            <h1 className='h2-flightList'>Available Flights</h1>
        }
        {List}
        </>
    )
}

export default FlightList;