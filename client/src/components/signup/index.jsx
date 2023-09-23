import './index.scss'
import {  useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    const baseURL='/api/FlightReservation/api/v1/auth'
    const[err,setErr]=useState("")
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const refForm=useRef()
    const navRef = useRef();
    const navigate = useNavigate();
    async function register(event){
        const data={
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            role:"USER"
        }
        await axios.post(`${baseURL}/register`,data,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }).then((response) => {
            if(response.status===200){
                localStorage.setItem('FRtoken',response.data.access_token)
                setErr("")
                navigate('/searchflight')
            } 
          }).catch(function (error){
            console.log(error); 
            setErr('Credentials Wrong!Please Try Again'); 
          })
    }

    function handleSubmit(e){
        if(user.password!==user.confirmPassword){
            e.preventDefault()
            setErr("passwords doesn't matches")
        }else{
            e.preventDefault()
            register()
        }
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
        <div className='signup-form'>
            <form ref={refForm} onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <ul className='form-inline'>
                    <li><input 
                    className='inputbox'
                    type='text' 
                    name='firstName' 
                    placeholder='First Name' 
                    value={user.firstName} 
                    onChange={handleChange} 
                    required
                    /></li>
                    <li><input 
                    className='inputbox'
                    type='text' 
                    name='lastName' 
                    placeholder='Last Name' 
                    value={user.lastName} 
                    onChange={handleChange} 
                    required
                    /></li>
                </ul>
                <ul>
                    <li><input
                    className='inputbox' 
                    type='text' 
                    name='email' 
                    placeholder='email' 
                    value={user.email} 
                    onChange={handleChange}
                    required 
                    /></li>
                </ul>
                <ul className='form-inline'>
                    <li><input 
                    className='inputbox'
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    value={user.password} 
                    onChange={handleChange} 
                    required
                    /></li>
                    <li><input 
                    className='inputbox'
                    type='password' 
                    name='confirmPassword' 
                    placeholder='Confirm Password' 
                    value={user.confirmPassword} 
                    onChange={handleChange}
                    required 
                    /></li>
                </ul>
                <ul>
                    <input className='submit-btn' type='submit' value='SIGN UP'/>
                </ul>
                <div className="form-text">
                    <p>Already have a account? <a href='/signin'>Login</a></p>
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

export default SignUp;