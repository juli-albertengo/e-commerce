import {createContext, useContext, useState } from 'react';

//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);

//Crear el provedor - Solo para manejar todo lo relacionado al array de carrito de compras
export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const handleBuy = (book, units) => {
        let newPurchase = {book, units};
        setCart([...cart, newPurchase]);
    }

    const modifyPurchaseUnits = (identifier, value) => {
        let miCompra = cart.find(compra => compra.book.title === identifier);
        miCompra.units = value;
    }

    const getCartTotal = (cart) => {
        let suma = 0;
        cart.forEach(item => {
            suma += item.book.price * item.units;
        })
        return suma;
    }

    const handleRemove = (title) => {
        let newCart = cart.filter(compra => {
        if(compra.book.title !== title){
            return compra;
            };
        })
        setCart(newCart);
        return newCart;
    }
    
    return (
        <AppContext.Provider value={{handleBuy, cart, handleRemove, modifyPurchaseUnits, getCartTotal}}>
            {children}
        </AppContext.Provider>
    )
}