//Estilos
import '../../containers/AboutusContainer/AboutUsContainer.scss';

//Recursos - Author Photos
import john from "./johngreen.jpg";
import jodie from "./jodie.jpg";

//Componente relleno para darle mas entidad al sitio
function UpcomingEvents() {
    return (
            <div className='mb-3 upcomingEvents'>
                <h2 className="py-3 fuente">Upcoming Events</h2>
                <div className='row'>
                    <div className="col-lg-6 fuente">
                        <h4 className='fuente'>Come chat with John Green!</h4>
                        <div className='d-flex'>
                            <div>
                                <img className="mr-3 rounded author__img" src={john} alt="author_photo"/>
                            </div>
                            <p className="fuente">Come chat with author John Green on Monday and discuss important things lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <h4 className="fuente">Come chat with Jodie Picoult!</h4>
                        <div className='d-flex'>
                            <div>
                                <img className="mr-3 rounded author__img" src={jodie} alt="author_photo"/>
                            </div>
                            <p className="fuente">Come chat with author Jodie Picoult on Monday and discuss important things lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default UpcomingEvents;