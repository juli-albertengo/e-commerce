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
        <div className='container-lg'>
            <h2 className='cart__heading'>My Cart</h2>

            {cart.length === 0 ? 

                <div className='mb-4'>
                    <p className='fuente'>You haven't selected any item yet!</p>
                    <NavLink to='/browseShelfs'>
                        <button className='ml-md-5 botonNextRead'>Let's find your next read</button>
                    </NavLink>
                </div> :
                
                <> 
                    {cart.map((purchase, index) => {
                        return <CartItem key={index} purchase={purchase}></CartItem>
                    })}
                    <div className='row'>
                        <h4 className='col-md-6 col-sm-12 fuente'><span className='total'>Total Amount</span>: US${getCartTotal(cart)}</h4>
                        <NavLink to={`/placeOrder`} className='col-md-6 col-sm-12'> 
                            <button className='mb-3 botonProcess'>Process Purchase</button>  
                        </NavLink>
                    </div>
                </>
            }

        </div>
    )
}

export default CartContainer;