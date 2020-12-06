import {useEffect, useState} from 'react';

//Import Firebase
import { getFirestore } from '../firebase';


//FETCH ALL BOOKS IN THE DATABASE
const useFetchAllBooks = (initialValue) => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        setLoading(true);
        let ignore = false;
        let db = getFirestore();
        async function fetchBooks(){
            if(!ignore){
                let bookCollection = await db.collection('books');
                let response = await bookCollection.get()
                if (response.size === 0){
                    console.log('No Results');
                } else {
                    setState(response.docs.map(doc => doc.data()))
                    setLoading(false);
                } 
            }
        }
        fetchBooks();
        return () => (ignore = true);
    }, [])

    return[state, loading];
}

export default useFetchAllBooks;