import {createContext, useContext, useState } from 'react';


//Firbase
import { getFirestore } from '../firebase';


//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);



//Crear el provedor - Solo para manejar todo lo relacionado al array de carrito de compras
export const AppProvider = ({children}) => {
    function getCartfromLS(){
        let mySavedCart = JSON.parse(localStorage.getItem("mySavedCart"));
        if(mySavedCart === null){
            return []
        } else {
            return mySavedCart
        }
    }
    const [cart, setCart] = useState(getCartfromLS());
    
    const handleBuy = (book, units) => {
        let bookTitle = book.title;
        let bookPrice = book.price;
        let bookAuthor = book.author;
        let bookImg = book.img;
        let newPurchase = {book: bookTitle, author: bookAuthor, price: bookPrice, img: bookImg, units};
        setCart([...cart, newPurchase]);
        localStorage.setItem("mySavedCart", JSON.stringify([...cart, newPurchase]));
    }

    const modifyPurchaseUnits = (identifier, value) => {
        let newCart = cart.map(compra =>{
            if (compra.book === identifier){
                compra.units = value;
                return compra;
            } else {
                return compra
            }
        })
        setCart(newCart);
        localStorage.setItem("mySavedCart", JSON.stringify(newCart));
    }

    const getCartTotal = (cart) => {
        let suma = 0;
        cart.forEach(compra => {
            suma += compra.price * compra.units;
        })
        return suma;
    }

    const handleRemove = (title) => {
        let newCart = cart.filter(compra => compra.book !== title)
        setCart(newCart);
        localStorage.setItem("mySavedCart", JSON.stringify(newCart));
    }

    const updateStock = ({products}) => {
        let myCart = products.cart;
        const db = getFirestore()
        myCart.forEach(async (book) => {
            let docsRef = await db.collection('books').where('title', '==', book.book).get()
            docsRef.forEach(async function(doc){
                let docRef = await db.collection('books').doc(doc.id) 
                let prevStock = doc.data().stock
                docRef.update({stock: prevStock - book.units})
            })
        })
    }

    const cleanCart = () => {
        localStorage.setItem("mySavedCart", JSON.stringify([]));
        setCart([]);
    }
    
    return (
        <AppContext.Provider value={{handleBuy, cart, handleRemove, modifyPurchaseUnits, getCartTotal, updateStock, cleanCart}}>
            {children}
        </AppContext.Provider>
    )
}