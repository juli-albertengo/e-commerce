//Hooks
import {useState, useEffect} from 'react'

//Route - Params
import {useParams} from 'react-router-dom';

//FakeDb
import getSingleBook from "../../fakedb/fakedbsinglebook";

//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading"

//Photos
import educated from './educated.png'

function ItemDetailContainer() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const {bookId} = useParams();


    useEffect(() => {
        let ignore = false;
        async function fetchSingleBook(bookId){
            const book = await getSingleBook(bookId);
            if(!ignore){
                setBook(book);
                setLoading(false);
            }
        }
        fetchSingleBook(bookId);
    }, [bookId])

    return (
        <>
            {loading ? 
            <Loading />
            : 
            <ItemDetail product={book} photo={educated}/>
            }
        </>
    );
}

export default ItemDetailContainer;