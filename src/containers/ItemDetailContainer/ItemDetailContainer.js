//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading"

//Router - Params
import {useParams} from 'react-router-dom';

//CustomHooks
import useFetchSingleBook from '../../customHooks/useFetchSingleBook';

//Renderiza un ItemDetail - Pagina con detalle del libro
function ItemDetailContainer() {
    const {bookId} = useParams();
    const [book, loading] = useFetchSingleBook({}, bookId);

    return (
        <>
            {loading ? 
            <Loading />
            : 
            book === 'Not Found' ? 
            <p>The requested book doesn't exists</p> :
            <ItemDetail product={book}/>
            }
        </>
    );
}

export default ItemDetailContainer;