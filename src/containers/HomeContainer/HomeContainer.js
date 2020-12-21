//Estilos
import './HomeContainer.scss'

//Components
import BookList from "../../components/BookList/BookList";
import Loading from "../../components/Loading/Loading"

//CustomHooks
import useFetchAllBooks from '../../customHooks/useFetchAllBooks'

function Home() {
   const [books, loading] = useFetchAllBooks([]);

    return (
        <div className='container-lg'>
            {loading ? 
            <Loading /> : 
            books === 'Problem with DB' ?
            <>
                <p className='problemDB'>There has been a problem laoding the books, please come back later</p>
            </> 
            :
            <>
                <h2 className="mt-4 mb-3 fuente">Latest 2020!</h2>
                <BookList products={books}/>
            </>
            }     
        </div>
    );
}

export default Home;