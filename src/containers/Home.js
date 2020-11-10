import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Home.scss";
import educated from "./educated.png";
import sgt from "./sgt.PNG"
import badblood from "./badblood.png"
import rosie from "./rosie.png"
import thechoice from "./thechoice.png"
import john from "./johngreen.png"

//import ItemCount from "../components/ItemCount/ItemCount"

const Latest = () => {
    return (
        <>
            <div className="container-fluid">
                <h2 className="container__p">Latest 2020</h2>
                <div className="latestBooks">
                    <div className="bookCard">
                        <img className="bookCard__img" src={educated}/>
                    </div>
                    <div className="bookCard">
                        <img className="bookCard__img" src={sgt}/>
                    </div>
                    <div className="bookCard">
                        <img className="bookCard__img" src={badblood}/>
                    </div>
                    <div className="bookCard">
                        <img className="bookCard__img" src={rosie}/>
                    </div>
                    <div className="bookCard">
                        <img className="bookCard__img" src={thechoice}/>
                    </div>
                </div>
            </div>
        </>
    );
}

const Upcoming = () => {
    return (
        <>
            <div className="container-fluid">
                <h2 className="container__p">Upcoming Events</h2>
                <div className="authorCard">
                    <h4 className="authorCard__title">Come chat with John Green!</h4>
                    <img className="authorCard__img" src={john}/>
                    <p className="authorCard__p">Come chat with author John Green blabla</p>
                </div>
            </div>
        </>
    );
}


function Home(props) {

    const showConsole = (value) => {
        console.log(value)
    }

    return (
        <>
            <Navbar />
            <Latest />
            {
                //<ItemCount min="1" max="10" onAdd={showConsole}/>
            }
            <Upcoming/>
            <Footer />
        </>
    );
}

export default Home;