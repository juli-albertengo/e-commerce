//Estilos
import './BrowseShelfsContainer.scss'

//Components
import BookList from "../../components/BookList/BookList"; 
import Loading from "../../components/Loading/Loading";
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav';

//CustomHooks
import useFetchAllBooks from '../../customHooks/useFetchAllBooks';

function BrowseShelfs(){
    const [books, loading] = useFetchAllBooks([])

    return(
        <> 
        <CategoriesNav/>
        
        {loading ?
            <Loading /> :
            books === 'Problem with DB' ?
            <>
                <p>There has been a problem laoding the books, please come back later</p>
            </>
            :
            <>
                <h2 className="container__p">All Books</h2>
                <BookList products={books}/>
            </> 
        }
        </>   
    )
}

export default BrowseShelfs;