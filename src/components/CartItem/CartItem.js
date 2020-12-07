//Estilos
import './CartItem.scss';

//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';

//Context
import {useAppContext} from '../../context/useAppContext'

//State
import {useState} from 'react'

//Por cada item agregado al carrito - Utiliza ItemCounter para llevar la cuenta de las unidades a comprar
function CartItem({product}){
    const [units, setUnits] = useState(product.amount)
    const comprarUnidades = (value) => {
        setUnits(value);
    }
    const {handleRemove} = useAppContext()

    let total = product.product.price * units

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2'>
                    <img src={product.product.img} className='img-fluid' alt='Book_Cover'/>
                </div>
                <div className='col-lg-6'>
                    <h4 className='bajada'>{product.product.title}</h4>
                    <p className='bajada'>by {product.product.author}</p>
                    <ItemCounter min="1" max="10" onAdd={comprarUnidades} initialValue={units}/>
                    <p className='bajada'>Total: ${total} USD</p>
                    <button onClick={() => handleRemove(product.product.title)} className='btn btn-sm btn-outline-danger mb-5'>Remove from Cart</button>
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


