import {useEffect, useState} from 'react';

//FakeDB
import getBooks from "../fakedb/fakedb";

const useFetch = (initialValue) => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        setLoading(true);
        let ignore = false;
        async function fetchBooks(){
            let booksAsJson = await getBooks();
            if(!ignore){
                const books = await JSON.parse(booksAsJson);
                setState(books);
                setLoading(false);
            }
        }
        fetchBooks();
        return () => (ignore = true);
    }, [])

    return[state, loading];
}

export default useFetch;