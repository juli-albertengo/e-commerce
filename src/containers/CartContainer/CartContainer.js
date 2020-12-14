//Estilos
import './CartContainer.scss';

//Components
import CartItem from '../../components/CartItem/CartItem';

//Routes
import { NavLink } from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'
import { useState } from 'react';

//Set orders
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';

function CartContainer(){
    const {cart, getCartTotal} = useAppContext();
    const [total, setTotal] = useState(getCartTotal(cart))

    const processPurchase = () => {
        console.log(cart);
        const db = getFirestore();
        const ventas = db.collection("orders");
        const newOrder = {
            buyer: {name: 'Julieta Albertengo', email: 'julieta@prueba.com'},
            products: {cart},
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getCartTotal(cart) 
        }
        ventas.add(newOrder).then(({id}) => {
            console.log(id);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log('Cambiar Loading a False');
        })
    }


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
                cart.map((purchase, index) => {
                    return <CartItem key={index} ind={index} purchase={purchase} setTotalCompra={setTotal}></CartItem>
                }) 
            }
            <h4 className='bajada'>Total Amount: ${total}</h4>
            <button className='mb-3' onClick={processPurchase}> Process Purchase</button>
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