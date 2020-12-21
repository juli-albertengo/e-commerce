//Estilos
import './ItemDetailContainer.scss';

//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading"

//Router - Params
import {useParams, NavLink} from 'react-router-dom';

//CustomHooks
import useFetchSingleBook from '../../customHooks/useFetchSingleBook';

//Renderiza un ItemDetail - Pagina con detalle del libro
function ItemDetailContainer() {
    const {bookId} = useParams();
    const [book, loading] = useFetchSingleBook({}, bookId);

    return (
        <div className='container-lg'>
            {loading ? 
            <Loading />
            : 
            book === 'Not Found' ? 
            <>
                <h3 className='my-4 fuente'>The requested book doesn't exists</h3> 
                <NavLink to='/browseShelfs'>
                    <button className='mb-3 botonNextRead'>Let's find your next read!</button>
                </NavLink>
            </>
            :
            <ItemDetail product={book}/>
            }
        </div>
    );
}

export default ItemDetailContainer;