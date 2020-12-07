//Estilos
import './AboutUsContainer.scss';

//Recursos
import vector from './resource.png';

//NavLink
import {NavLink} from 'react-router-dom';

//Componente relleno para darle mas entidad al sitio
function AboutUs(){
    return(
        <div className='container-fluid'>
            <h1 className='my-3 d-flex justify-content-center'>Bookstore</h1>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <h2 className='ml-5 titulo'>Cool Title</h2>
                    <p className='ml-5 bajada'>In our Bookstore we want to sell books, so we encourage you to read more. Plus inspirational things here..</p>
                    <NavLink to='/browseShelfs/books/0'>
                        <button className='ml-5 boton'>Let's find your next read</button>
                    </NavLink>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                    <img src={vector} className='img-fluid'/>
                </div>
            </div>
            <div className='row features'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='features__p'>Free Sheeping</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='features__p'>30 day return</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='features__p'>Secure Payments</h5>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h5 className='features__p'>24/7 support</h5>
                </div>
            </div>
            <div>
                <h2 className='titulo my-4'>Where to find us</h2>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 my-3 pl-5'>
                        <iframe title='Where_To_Find_Us' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.63730406530317!2d-87.62585062025559!3d41.86125865169065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c840fe0ba75%3A0xb133ad897ee9fdeb!2s1500%20Michigan%20Ave%204668%20N%2C%20Chicago%2C%20IL%2060605%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1606661227157!5m2!1ses!2sar" width="600" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 my-3 offset-2'>
                        <h3 className='titulo my-2'>Contact Details</h3>
                        <p className='contact__p'>bookstore@gmail.com</p>
                        <p className='contact__p'>instagram/bookstore</p>
                        <p className='contact__p'>facebook/bookstore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;