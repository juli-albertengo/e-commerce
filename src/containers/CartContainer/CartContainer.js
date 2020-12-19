//Estilos
import './CartContainer.scss';

//Components
import CartItem from '../../components/CartItem/CartItem';

//Routes
import { NavLink } from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'

function CartContainer(){
    const {cart, getCartTotal} = useAppContext();

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
                <> 
                {cart.map((purchase, index) => {
                    return <CartItem key={index} purchase={purchase}></CartItem>
                })}
                <h4 className='bajada'>Total Amount: ${getCartTotal(cart)}</h4>
                <NavLink to={`/placeOrder`}> <button className='mb-3'>Process Purchase</button>  </NavLink>
                </>
            }
        </div>
    )
}

export default CartContainer;