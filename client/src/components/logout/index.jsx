import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const URL='http://localhost:8080/FlightReservation/api/v1/auth/logout'
  async function handleLogout(e){
    await axios.post(URL,
    {
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': "Bearer "+localStorage.getItem('FRtoken')
        },
        withCredentials: true
    }).then((response) => {
        
    }).catch(function (error){
        console.log(error)
    })
}

    useEffect(()=>{
        localStorage.clear()
        handleLogout()
        navigate('/')
    },[])
}
export default Logout;