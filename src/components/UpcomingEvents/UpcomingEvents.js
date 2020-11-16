import "./UpcomingEvents.scss";
import john from "./johngreen.png";

function UpcomingEvents() {
    return (
        <>
            <div className="container-fluid">
                <h2 className="container__p">Upcoming Events</h2>
                <div className="eventCard">
                    <h4 className="eventCard__title">Come chat with John Green!</h4>
                    <div className='eventCard__details'>
                        <div className="eventCard__details__divImg">
                            <img className="author__img" src={john} alt="author_photo"/>
                        </div>
                        <p className="eventCard__p">Come chat with author John Green on Monday and discuss important things lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingEvents;