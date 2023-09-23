import './index.scss'
import { Outlet } from "react-router-dom";
import NavBar from '../navbar';
import Footer from '../footer';

const Layout = () => {
   
    return(
        <div className='layout'>
            {/* {location.pathname==='/signin'||location.pathname==='/signup' 
            ?"":<NavBar />} */}
            <NavBar />
            <Outlet />
            {location.pathname!=='/'?"":<Footer />}
        </div>
    )
}

export default Layout;