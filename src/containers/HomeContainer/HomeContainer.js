//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookList from "../../components/BookList/BookList";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents"
import Loading from "../../components/Loading/Loading"

//CustomHooks
import useFetch from '../../customHooks/useFetch'

function Home() {
   const [books, loading] = useFetch([]);

    return (
        <>
            <Navbar />
            {loading ? 
            <Loading />
            : 
            <BookList products={books}/>}     
            <UpcomingEvents />
            <Footer />
        </>
    );
}

export default Home;