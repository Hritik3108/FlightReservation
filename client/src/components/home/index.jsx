import './index.scss'
import paris from '../../assets/paris.jpg'
import tokyo from '../../assets/tokyo.jpg'
import nyc from '../../assets/nyc.jpg'

const Home = () => {
    return(
        <main>
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Our Flight Booking Service</h1>
                <p>Discover the world and book your dream flights today.</p>
                <a href="/searchflight" className="btn">Search Flights</a>
            </div>
        </div>

        <div className="benefits">
            <h2>Benefits of Traveling</h2>
            <div className="benefit">
                <div className="icon"></div>
                <p>Explore New Cultures</p>
            </div>
            <div className="benefit">
                <div className="icon"></div>
                <p>Relax and Rejuvenate</p>
            </div>
            <div className="benefit">
                <div className="icon"></div>
                <p>Expand Your Horizons</p>
            </div>
        </div>

        <section className="why-travel">
            {/* <h2>Why Travel with Us?</h2> */}
            <p>Our commitment to excellence ensures you have a safe and memorable journey.</p>
        </section>

        <section className="popular-locations">
            <h2>Most Popular Travel Locations</h2>
            <div className="location">
                <img src={paris} alt="Paris" className='travel-image' />
                <p className='paris'>Paris, France</p>
            </div>
            <div className="location">
                <img src={nyc} alt="New York City" className='travel-image'/>
                <p className='nyc'>New York City, USA</p>
            </div>
            <div class="location">
                <img src={tokyo} alt="Tokyo" className='travel-image'/>
                <p className='tokyo'>Tokyo, Japan</p>
            </div>
        </section>
    </main>
    )
}

export default Home;