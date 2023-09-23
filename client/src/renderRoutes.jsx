import {Route,Routes} from 'react-router-dom'
import Layout from './components/layout'
import SignIn from './components/signin'
import SignUp from './components/signup'
import Search from './components/search'
import Home from './components/home'
import FlightList from './components/flightList'
import Reservation from './components/reservation'
import Logout from './components/logout'
import Confirmation from './components/confirmation'

const RenderRoutes = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/searchflight" element={<Search />}>
          <Route path="flights" element={<FlightList />}></Route>
        </Route>
        <Route path='/reservation' element={<Reservation />} >
          <Route path="confirm" element={<Confirmation />}></Route>
        </Route> 
        <Route path='/logout' element={<Logout />} />
      </Route>
     </Routes>
        </>
    )
}
export default RenderRoutes;