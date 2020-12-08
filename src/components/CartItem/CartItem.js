//Estilos
import './CartItem.scss';

//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';

//State
import {useState} from 'react'

//Context
import {useAppContext} from '../../context/useAppContext'

//Por cada item agregado al carrito - Utiliza ItemCounter para llevar la cuenta de las unidades a comprar
function CartItem({purchase, setTotalCompra}){
    const {handleRemove, modifyPurchaseUnits, getCartTotal, cart} = useAppContext()
    const [units, setUnits] = useState(purchase.units)

    const agregarUnidades = (value) => {
        setUnits(value)
        modifyPurchaseUnits(purchase.book.title, value);
        getCartTotal(cart)
        setTotalCompra(getCartTotal(cart));
    }

    const removerCompra = (identifier) => {
        let newCart = handleRemove(identifier);
        setTotalCompra(getCartTotal(newCart));
    }

    let total = units * purchase.book.price;

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2'>
                    <img src={purchase.book.img} className='img-fluid' alt='Book_Cover'/>
                </div>
                <div className='col-lg-6'>
                    <h4 className='bajada'>{purchase.book.title}</h4>
                    <p className='bajada'>by {purchase.book.author}</p>
                    <p className='bajada'>Price: ${purchase.book.price} USD</p>
                    <ItemCounter min="1" max="10" initialValue={units} onAdd={agregarUnidades}/>
                    <p className='bajada'>Total: ${total} USD</p>
                    <button onClick={() => {removerCompra(purchase.book.title)}} className='btn btn-sm btn-outline-danger mb-5'>Remove from Cart</button>
                </div>
            </div>
            {
            //Detalle del producto, foto con nombre, precio a la derecha,
            //Poder agregar mas items del mismo libro
            //Tachito de basura para remover del cart
            //Total
            // Datos de contacto - Nombre - Apellido - Telefono - Mail (ingresado dos veces)- Recien ahi activar boton de realizar compra
            //Place my order
            }
        </div>
    )
}

export default CartItem;


