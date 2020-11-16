//Hooks
import {useState, useEffect} from 'react'

//FakeDb
import getSingleBook from "../../fakedb/fakedbsinglebook";

//Components
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading"

//Photos
import educated from './educated.png'

function ItemDetailContainer() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchSingleBook(){
        const bookAsJson = await getSingleBook();
        const book = await JSON.parse(bookAsJson);
        setBook(book);
        setLoading(false);
    }

    useEffect(() => {
        fetchSingleBook();
    }, [])

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