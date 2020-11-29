import {useState} from 'react'
import './CartItem.scss';
import ItemCounter from '../ItemCounter/ItemCounter';

function CartItem({product}){
    const [units, setUnits] = useState(product.amount)
    const comprarUnidades = (value) => {
        setUnits(value);
    }

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2'>
                    <img className='img-fluid'/>
                </div>
                <div className='col-lg-6'>
                    <h4>{product.product.title}</h4>
                    <p>by {product.product.author}</p>
                    <p>${product.product.price}</p>
                    <ItemCounter min="1" max="10" onAdd={comprarUnidades} initialValue={units}/>
                    <p>Units: {units}</p>
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


