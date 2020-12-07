//Estilos
import './BrowseShelfsContainer.scss'

//Components
import BookList from "../../components/BookList/BookList"; 
import Loading from "../../components/Loading/Loading";

//NavLink - RouterParams
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router-dom';

//CustomHooks
import useFetchAllBooks from '../../customHooks/useFetchAllBooks';
//import useFetchSomeBooks from '../../customHooks/useFetchSomeBooks'

function BrowseShelfs(){
    const {genreId} = useParams();
    const [books, loading] = useFetchAllBooks([])
    //const [someBooks, loadingSomeBooks] = useFetchSomeBooks([], 'genreId', genreId);
    return(
        <> 
        <div className='d-flex justify-content-around mt-4 mb-2 fuente categories'>
            <NavLink to='/browseShelfs/books/2'><p>Novels</p></NavLink>
            <NavLink to='/browseShelfs/books/1' ><p>Memoirs</p></NavLink>
            <NavLink to='/browseShelfs/books/3' ><p>Non-Fiction</p></NavLink>
            <NavLink to='/browseShelfs/books/6' ><p>Poetry</p></NavLink>
            <NavLink to='/browseShelfs/books/7' ><p>Graphic Novels &amp; Comics</p></NavLink>
            <NavLink to='/browseShelfs/books/5' ><p>Young Adult</p></NavLink>
            <NavLink to='/browseShelfs/books/4' ><p>Kids</p></NavLink>   
        </div>
        {loading ?
            <Loading /> :
            <>
            <h2 className="container__p">All Books</h2>
            <BookList products={books}/>
            </> 
        }
   
        </>   
    )
}

export default BrowseShelfs;