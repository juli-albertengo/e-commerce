import {createContext, useContext, useState } from 'react';

//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);

//Crear el provedor - Solo para manejar todo lo relacionado al array de carrito de compras
export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const handleBuy = (book, units) => {
        let bookTitle = book.title;
        let bookPrice = book.price;
        let bookAuthor = book.author;
        let bookImg = book.img;
        let newPurchase = {book: bookTitle, author: bookAuthor, price: bookPrice, img: bookImg, units};
        setCart([...cart, newPurchase]);
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
    }
    
    return (
        <AppContext.Provider value={{handleBuy, cart, handleRemove, modifyPurchaseUnits, getCartTotal}}>
            {children}
        </AppContext.Provider>
    )
}