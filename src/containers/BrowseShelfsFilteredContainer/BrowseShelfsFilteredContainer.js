//Estilos
//import './BrowseShelfsContainer.scss'

//Components
import FilteredBookList from "../../components/FilteredBookList/FilteredBookList"; 
import Loading from "../../components/Loading/Loading";
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav';
import Genre from '../../components/Genre/Genre';

//Router - Params
import {useParams} from 'react-router-dom';

//CustomHooks
import useFetchSomeBooks from '../../customHooks/useFetchSomeBooks';

function BrowseShelfs(){
    const {genreId} = useParams();
    const [books, loading] = useFetchSomeBooks([], 'genreId', genreId);
    
    return(
        <> 
        <CategoriesNav/>
        {loading ?
            <Loading /> :
            <>
            <Genre genreId={parseInt(genreId)} />
            <FilteredBookList products={books}/>
            </> 
        }
        </>   
    )
}

export default BrowseShelfs;