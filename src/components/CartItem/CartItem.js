//Estilos
import '../../containers/CartContainer/CartContainer.scss'

//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';

//Context
import {useAppContext} from '../../context/useAppContext'

//Por cada item agregado al carrito
function CartItem({purchase}){
    const {modifyPurchaseUnits, handleRemove} = useAppContext()

    const agregarUnidades = (value) => {
        modifyPurchaseUnits(purchase.book, value);
    }

    const removerCompra = (identifier) => {
        handleRemove(identifier);
    }

    let totalPorLibro = purchase.units * purchase.price;

    return(
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12 text-center mb-3'>
                <img src={purchase.img} className='cartItem__img' alt='Book_Cover'/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <h4 className='fuente'>{purchase.book}</h4>
                <p className='fuente'>by {purchase.author}</p>
                <p className='fuente mb-4'>Price: US${purchase.price}</p>
                <div className='d-flex align-items-center mb-3'>
                    <ItemCounter min="1" max="10" initialValue={purchase.units} onAdd={agregarUnidades}/>
                    <p className='fuente my-0 ml-3'><span className='total'>Total</span>: US${totalPorLibro}</p>
                </div>
                <button onClick={() => {removerCompra(purchase.book)}} className='btn btn-sm btn-outline-danger mb-5'>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartItem;


