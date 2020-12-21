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
            <h2 className='my-3 subrayado fuente'>My Cart</h2>

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
                        <h5 className='col-md-6 col-sm-12 fuente mb-4'><span className='subrayado'>Total Amount</span>: US$ {getCartTotal(cart)}</h5>
                        <NavLink to={`/placeOrder`} className='col-md-6 col-sm-12'> 
                            <button className='mb-3 botonProcess-goCart'>Process Purchase</button>  
                        </NavLink>
                    </div>
                </>
            }

        </div>
    )
}

export default CartContainer;