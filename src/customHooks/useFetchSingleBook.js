import {useEffect, useState} from 'react';

//Import Firebase
import { getFirestore } from '../firebase';

//FETCH SINGLE BOOK USANDO PARAMETRO DEL URL
const useFetchSingleBook = (initialValue, bookId) => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialValue);
    
    useEffect(()=>{
        setLoading(true);
        let ignore = false;
        let db = getFirestore();
        async function fetchSingleBook(bookId){
            if(!ignore){
                const booksFromFB = await db.collection('books').where('bookId', '==', parseInt(bookId)).get();
                booksFromFB.forEach(function(doc){
                    if(!doc.exists){
                        console.log("Item doesn't exists");
                    } else {
                        setState(doc.data());
                        setLoading(false);
                    }
                }
                )
            }}
        fetchSingleBook(bookId);
        return () => (ignore = true);
    }, [bookId])

    return [state, loading];
}

export default useFetchSingleBook;