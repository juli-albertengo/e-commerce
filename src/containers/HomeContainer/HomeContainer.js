//Components
import BookList from "../../components/BookList/BookList";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents"
import Loading from "../../components/Loading/Loading"

//CustomHooks
import useFetchAllBooks from '../../customHooks/useFetchAllBooks'

function Home() {
   const [books, loading] = useFetchAllBooks([]);

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