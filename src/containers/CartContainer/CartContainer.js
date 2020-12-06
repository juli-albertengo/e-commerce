//Estilos
import './CartContainer.scss';

//Components
import CartItem from '../../components/CartItem/CartItem';

//Routes
import { NavLink } from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'

function CartContainer(){

    const {cart} = useAppContext()

    return(
        <div className='container-fluid'>
            <h2 className='cart__heading'>My Cart</h2>
            {cart.length === 0 ? 
                <NavLink to={'/'}> <h5>There are no items in your cart. Go to home</h5>  </NavLink>: 
                cart.map((purchase, index) => {
                    return <CartItem key={index} product={purchase}></CartItem>
                }) 
            }
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