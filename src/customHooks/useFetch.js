import {useEffect, useState} from 'react';

//FakeDB
import getBooks from "../fakedb/fakedb";

const useFetch = (initialValue) => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialValue);

    async function fetchBooks(){
        let booksAsJson = await getBooks();
        const books = await JSON.parse(booksAsJson);
        setState(books);
        setLoading(false);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return[state, loading];
}

export default useFetch;