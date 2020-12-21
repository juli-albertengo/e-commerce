//Import React
import {createContext, useContext, useState } from 'react';

//Import Firbase
import { getFirestore } from '../firebase';

//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);

//Crear el provedor - Para manejar todo lo relacionado al carrito de compras
export const AppProvider = ({children}) => {

    //Get Cart from Local Storage
    function getCartfromLS(){
        let mySavedCart = JSON.parse(localStorage.getItem("mySavedCart"));
        if(mySavedCart === null){
            return []
        } else {
            return mySavedCart
        }
    }

    //Estado - Usar LS
    const [cart, setCart] = useState(getCartfromLS());
    
    //Agregar compra - Boton Buy
    const handleBuy = (book, units) => {
        let bookId = book.bookId;
        let bookTitle = book.title;
        let bookPrice = book.price;
        let bookAuthor = book.author;
        let bookImg = book.img;
        let newPurchase = {book: bookTitle, author: bookAuthor, price: bookPrice, img: bookImg, bookId: bookId, units};
        setCart([...cart, newPurchase]);
        localStorage.setItem("mySavedCart", JSON.stringify([...cart, newPurchase]));
    }

    //Cambio de unidades - onAdd
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

    //Remover compra - Boton remove from cart
    const handleRemove = (title) => {
        let newCart = cart.filter(compra => compra.book !== title)
        setCart(newCart);
        localStorage.setItem("mySavedCart", JSON.stringify(newCart));
    }
    
    //Total del carrito
    const getCartTotal = (cart) => {
        let suma = 0;
        cart.forEach(compra => {
            suma += compra.price * compra.units;
        })
        return suma;
    }

    //Actualizar el stock de firebase cuando se procesa una compra
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

    //Limpiar el carrito una vez procesada la compra
    const cleanCart = () => {
        localStorage.setItem("mySavedCart", JSON.stringify([]));
        setCart([]);
    }
    
    return (
        <AppContext.Provider value={{cart, handleBuy, handleRemove, modifyPurchaseUnits, getCartTotal, updateStock, cleanCart}}>
            {children}
        </AppContext.Provider>
    )
}