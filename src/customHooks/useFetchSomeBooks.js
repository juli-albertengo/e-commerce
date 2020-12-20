//Import React
import {useEffect, useState} from 'react';

//Import Firebase
import { getFirestore } from '../firebase';


//FETCH SOME BOOKS IN THE DATABASE BY X FILTER
const useFetchSomeBooks = (initialValue, filter, value) => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        setLoading(true);
        let ignore = false;
        let db = getFirestore();
        async function fetchSomeBooks(filter, value){
            if(!ignore){
                let myBooks = []
                let bookCollection = await db.collection('books').where(filter, '==', value).get();
                bookCollection.forEach(function(doc){
                    if(!doc.exists){
                        console.log("Items don't exist");
                    } else {
                        myBooks.push(doc.data())
                    }
                })
                setState(myBooks);
                setLoading(false);
            }
        }
        fetchSomeBooks(filter, value);
        return () => (ignore = true);
    }, [filter, value])

    return[state, loading];
}

export default useFetchSomeBooks;