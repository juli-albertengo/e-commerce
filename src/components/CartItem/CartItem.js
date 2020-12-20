//Estilos
import './CartItem.scss';

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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2'>
                    <img src={purchase.img} className='img-fluid' alt='Book_Cover'/>
                </div>
                <div className='col-lg-6'>
                    <h4 className='bajada'>{purchase.book}</h4>
                    <p className='bajada'>by {purchase.author}</p>
                    <p className='bajada'>Price: ${purchase.price} USD</p>
                    <ItemCounter min="1" max="10" initialValue={purchase.units} onAdd={agregarUnidades}/>
                    <p className='bajada'>Total: ${totalPorLibro} USD</p>
                    <button onClick={() => {removerCompra(purchase.book)}} className='btn btn-sm btn-outline-danger mb-5'>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;


