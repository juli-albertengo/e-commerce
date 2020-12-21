//Estilos
import '../BrowseShelfsContainer/BrowseShelfsContainer.scss'

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
    function parseURL(genre){
        switch(genre){
            case 'Memoirs':
                return '1';
            case 'Novels':
                return '2';
            case 'Non-Fiction':
                return '3';
            case 'Kids':
                return '4';
            case 'Young-Adult':
                return '5';
            case 'Poetry':
                return '6';
            case 'GraphicNovels&Comics':
                return '7';
            default:
                return null;
        }
    }
    const [books, loading] = useFetchSomeBooks([], 'genreId', parseURL(genreId));
    
    return(
        <div className='container-lg'> 
            <CategoriesNav/>

            {loading ?
                <Loading /> :
                books === [] ?
                <>
                    <p className='problemDB'>There are no books in this genre</p>
                </>
                :
                <>
                    <Genre genreId={genreId} />
                    <FilteredBookList products={books}/>
                </> 
            }
        </div>   
    )
}

export default BrowseShelfs;