//Components
import BookList from "../../components/BookList/BookList";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents"
import Loading from "../../components/Loading/Loading"

//CustomHooks
import useFetch from '../../customHooks/useFetch'

function Home() {
   const [books, loading] = useFetch([]);

    return (
        <>
            {loading ? 
            <Loading />
            : 
            <BookList products={books}/>}     
            <UpcomingEvents />
        </>
    );
}

export default Home;