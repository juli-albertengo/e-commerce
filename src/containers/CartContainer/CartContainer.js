//Estilos
import './CartContainer.scss';

//Components
import CartItem from '../../components/CartItem/CartItem';

//Routes
import { NavLink } from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'
import { useEffect, useState } from 'react';

function CartContainer(){
    const {cart, getCartTotal} = useAppContext();
    const [total, setTotal] = useState(getCartTotal(cart))

    return(
        <div className='container-fluid'>
            <h2 className='cart__heading'>My Cart</h2>
            {cart.length === 0 ? 
                <div className='mb-4'>
                <p className='bajada'>You haven't selected any item yet!</p>
                <NavLink to='/browseShelfs'>
                    <button className='ml-5 boton'>Let's find your next read</button>
                </NavLink>
                </div>: 
                cart.map((purchase, index) => {
                    return <CartItem key={index} ind={index} purchase={purchase} setTotalCompra={setTotal}></CartItem>
                }) 
            }
            <h4 className='bajada'>Total Amount: ${total}</h4>
            <button className='mb-3'> Process Purchase</button>
            {
            //Detalle del producto, foto con nombre, precio a la derecha,
            //Poder agregar mas items del mismo libro
            //Tachito de basura para remover del cart
            //Total
            // Datos de contacto - Nombre y Apellido - Telefono - Mail - 
            //Place my order
            }
        </div>
    )
}

export default CartContainer;