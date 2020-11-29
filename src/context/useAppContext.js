import {createContext, useContext, useState } from 'react';

//Crear el Contexto
const AppContext = createContext();

//Crear el customHook y exportarlo
export const useAppContext = () => useContext(AppContext);

//Crear el provedor
export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const handleBuy = (book, units) => {
        setCart([...cart, {product: book, amount: units}])
    }

    return (
        <AppContext.Provider value={{handleBuy, cart}}>
            {children}
        </AppContext.Provider>
    )
}