import "./UpcomingEvents.scss";
import john from "./johngreen.jpg";
import jodie from "./jodie.jpg";

function UpcomingEvents() {
    return (
        <>
            <div className="container-fluid">
                <h2 className="container__p">Upcoming Events</h2>
                <div className='row'>
                    <div className="eventCard">
                        <h4 className="eventCard__title">Come chat with John Green!</h4>
                        <div className='eventCard__details'>
                            <div className="eventCard__details__divImg">
                                <img className="author__img" src={john} alt="author_photo"/>
                            </div>
                            <p className="eventCard__p">Come chat with author John Green on Monday and discuss important things lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="eventCard">
                        <h4 className="eventCard__title">Come chat with Jodie Picoult!</h4>
                        <div className='eventCard__details'>
                            <div className="eventCard__details__divImg">
                                <img className="author__img" src={jodie} alt="author_photo"/>
                            </div>
                            <p className="eventCard__p">Come chat with author Jodie Picoult on Monday and discuss important things lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingEvents;