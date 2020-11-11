import {useState, useEffect} from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookList from "../components/BookList/BookList";
import getBooks from "../fakedb/fakedb";
import "./Home.scss";
import john from "./johngreen.png"

//import ItemCount from "../components/ItemCount/ItemCount"

const Upcoming = () => {
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
    );
}


function Home(props) {
    //const showConsole = (value) => {
      //  console.log(value)
    //}
    const [books, setBooks] = useState([]);

    async function fetchBooks(){
        const booksAsJson = await getBooks();
        const books = await JSON.parse(booksAsJson);
        setBooks(books);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
            <Navbar />
            {
                //<ItemCount min="1" max="10" onAdd={showConsole}/>
            }
            {books.length === 0 ? <p>Cargando...</p> : <BookList products={books}/>}     
            <Upcoming/>
            <Footer />
        </>
    );
}

export default Home;