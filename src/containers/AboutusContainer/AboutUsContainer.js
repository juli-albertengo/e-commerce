//Estilos
import './AboutUsContainer.scss';

//Components
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents"

//Recursos
import vector from './resource.png';

//NavLink
import {NavLink} from 'react-router-dom';


//Componente relleno para darle mas entidad al sitio
function AboutUs(){

    return(
        <div className='container-lg'>
            <h1 className='my-2 text-center fuente'>Bookstore</h1>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-4 col-sm-12'>
                    <h2 className='fuente coolTitle'>Cool Title</h2>
                    <p className='fuente-light'>In our Bookstore we want to sell books, so we encourage you to read more. Plus inspirational things here..</p>
                    <NavLink to='/browseShelfs'>
                        <button className='botonNextRead'>Let's find your next read</button>
                    </NavLink>
                </div>
                <div className='col-lg-6 col-sm-12 text-center'>
                    <img src={vector} className='img-fluid' alt='bookStore'/>
                </div>
            </div>
            <div className='row justify-content-center align-items-center features'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='my-2 text-center fuente'>Free Sheeping</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='my-2 text-center fuente'>30 day return</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='my-2 text-center fuente'>Secure Payments</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='my-2 text-center fuente'>24/7 support</h5>
                </div>
            </div>
            <UpcomingEvents />
            <div>
                <h2 className='my-3 fuente'>Where to find us</h2>
                <div className='row my-3'>
                    <div className='col-md-6 col-sm-12'>
                        <iframe title='Where_To_Find_Us' height='300' width='300' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.63730406530317!2d-87.62585062025559!3d41.86125865169065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c840fe0ba75%3A0xb133ad897ee9fdeb!2s1500%20Michigan%20Ave%204668%20N%2C%20Chicago%2C%20IL%2060605%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1606661227157!5m2!1ses!2sar" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h3 className='my-3 fuente'>Contact Details</h3>
                        <p className='my-2 similLink'>bookstore@gmail.com</p>
                        <p className='my-2 similLink'>instagram/bookstore</p>
                        <p className='my-2 similLink'>facebook/bookstore</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;