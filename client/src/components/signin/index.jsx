import './index.scss'
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {

    const baseURL='api/FlightReservation/api/v1/auth/authenticate'
    const[err,setErr]=useState("")
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const navRef = useRef();
    const refForm=useRef()
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault()
        const data={
            email:user.email,
            password:user.password
          }
          await axios.post(baseURL, data,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }).then((response) => {
            if(response.status===200){
                localStorage.setItem('FRtoken',response.data.access_token)
                setErr("")
                navigate('/searchflight')
            }
            if(response.status===403){setErr('Credentials Wrong')}
          }).catch(function (error){
            console.log("a")
            console.log(error); 
            setErr('Somethings Wrong!Please Try Again'); 
          })  
    }

    function handleChange(event){
        const {name,value} = event.target
        setUser(prev => ({
            ...prev,
            [name]:value
        }))
    }

    return(
        <section>
        <div className="form-box">
            <nav ref={navRef} className='back-btn'>
                <NavLink exact="true" activeclassname="active" className='loggin-link' to={'/'}>
                    <FontAwesomeIcon icon={faHome} color='#fff' />
                </NavLink>
            </nav>
        <div className='signin-form'>
            <form ref={refForm} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <ul>
                    <li><input 
                    className='inputbox'
                    type='text' 
                    name='email' 
                    placeholder='email' 
                    value={user.email} 
                    onChange={handleChange} 
                    /></li>
                    <li><input 
                    className='inputbox'
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    value={user.password} 
                    onChange={handleChange} 
                    /></li>
                    <input className='submit-btn' type='submit' value='LOGIN'/>
                </ul>
                <div className="form-text">
                    <p>Don't have a account <a href='/signup'>Register</a></p>
                </div>
                <div className="form-text">
                    <p>{err}</p>
                </div>
            </form>
        </div>
    </div>   
    </section> 
    )
}

export default SignIn;