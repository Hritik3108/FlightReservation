import './index.scss'
import {useRef, useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import airplaneflight from '../../assets/airplaneflight.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [open,setOpen] = useState(false)
    const navRef = useRef();
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' >
            <img className='logo' src={airplaneflight} alt="logo"/>
            </Link>
            <div className='title'> Flight </div>
            

            <div className='menu-container' >
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <nav ref={navRef}>
                        <NavLink exact="true" activeclassname="active" className='loggin-link'>
                            <FontAwesomeIcon icon={faUser} color='#fff' />
                        </NavLink>
                    </nav>
                </div>
                <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
                    <ul>
                        <li>
                            {
                            location.pathname==='/'?
                            <a href='/' className='dont-show'>Home</a>:
                            <a href='/' >Home</a>
                            }
                        </li>
                        <li>
                            {
                            localStorage.getItem('FRtoken')===null?
                            <a href='#'className='dont-show'>Profile</a>:
                            <a href='#'>Profile</a>
                            }
                        </li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li>
                            {
                            localStorage.getItem('FRtoken')!==null?
                            <a href='/logout'>logout</a>:<a href='/signin'>login</a>
                            }
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default NavBar;