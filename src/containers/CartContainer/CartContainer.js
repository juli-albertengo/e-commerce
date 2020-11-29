import {useAppContext} from '../../context/useAppContext'
import './CartContainer.scss';
import CartItem from '../../components/CartItem/CartItem';

function CartContainer(){

    const {cart} = useAppContext()

    return(
        <div className='container-fluid'>
            <h2 className='cart__heading'>My Cart</h2>
            {cart.map((purchase, index) => {
                return <CartItem key={index} product={purchase}></CartItem>
            })}
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