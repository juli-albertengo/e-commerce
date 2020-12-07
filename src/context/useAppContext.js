import {createContext, useContext, useState } from 'react';

//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);

//Crear el provedor - Solo para manejar todo lo relacionado al array de carrito de compras
export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const handleBuy = (book, units) => {
        setCart([...cart, {product: book, amount: units}])
    }

    const handleRemove = (title) => {
        let newCart = cart.filter(book => {
            if(book.product.title !== title){
                return book;
            };
        })
        setCart(newCart);
    }

    return (
        <AppContext.Provider value={{handleBuy, cart, handleRemove}}>
            {children}
        </AppContext.Provider>
    )
}