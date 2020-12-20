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
            <Loading /> : 
            books === 'Problem with DB' ?
            <>
                <p>There has been a problem laoding the books, please come back later</p>
            </> 
            :
            <>
                <h2 className="container__p">Latest 2020!</h2>
                <BookList products={books}/>
            </>
            }     
            <UpcomingEvents />
        </>
    );
}

export default Home;