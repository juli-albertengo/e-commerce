//Estilos

//React
import { useEffect, useState } from 'react';

//Components
import Loading from "../../components/Loading/Loading"

//Context
import {useAppContext} from '../../context/useAppContext'

//Routes
import { NavLink } from 'react-router-dom'

//Firbase
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';


function PlaceOrderContainer(){
    //Carrito
    const {cart, getCartTotal, updateStock, cleanCart} = useAppContext();
    const [total] = useState(getCartTotal(cart));

    //Formulario - Chequar validez del mail
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [sameEmails, setSameEmails] = useState(false);

    //Proceso de compra
    const [id, setId] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
    }

    useEffect(() => {
        setSameEmails(false);
        if(email === confirmEmail && email !== '' && confirmEmail !== ''){
            setSameEmails(true);
        }
    }, [email, confirmEmail])

    const processPurchase = (e) => {
        e.preventDefault()
        setLoading(true)
        //Get input from form to generate buyer object
        let buyersName = document.getElementById('name');
        let buyersLastName = document.getElementById('lastName');
        let buyersPhone = document.getElementById('phone');
        let buyersEmail = document.getElementById('email');
        let buyer = {name: buyersName.value, LastName: buyersLastName.value, phone: buyersPhone.value, email: buyersEmail.value};
        //Get firestore and add the newOrder
        const db = getFirestore();
        const ventas = db.collection("orders");
        const newOrder = {
            buyer: buyer,
            products: {cart},
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
            state: 'generada'
        }
        ventas.add(newOrder).then(({id}) => {
            setId(id);
            updateStock(newOrder);
            setLoading(false);
        }).catch(err => {
            setErr(err);
            setLoading(false);
        }).finally(() => {
            buyersName.value = '';
            buyersLastName.value = '';
            buyersPhone.value = '';
            buyersEmail.value = '';
            cleanCart()
            setProcessed(true);
            setLoading(false);
        })
    }

    return(
        <>
        {/*Si el carrito esta vacio y la compra aun no esta procesada, mostrar boton para que vaya a comparar libros */}
        {cart.length === 0 && !processed ? 
                            <div className='mb-4'>
                                <p className='bajada'>You haven't selected any item yet!</p>
                                <NavLink to='/browseShelfs'>
                                    <button className='ml-5 boton'>Let's find your next read</button>
                                </NavLink>
                            </div>
                            :
                            //Si el carrito tiene items, y la compra aun no esta procesada, mostar los items del carrito y el form
                            !processed ? 
                                <div className='container-fluid'>
                                    <h2 className='cart__heading'>Place my Order</h2>
                                    {cart.map((purchase, index) => {
                                        return <p key={index}>{purchase.book}</p>
                                    })}
                                    <form onSubmit={processPurchase} id='buyerForm' className='row'>
                                        <div className='col form-group'>
                                            <label htmlFor='name'>Name: </label>
                                            <input className='form-control' type='text' id='name' name='name' required/>
                                        </div>
                                        <div className=' col form-group'>
                                            <label htmlFor='lastName'>Last Name: </label>
                                            <input className='form-control' type='text' id='lastName' name='lastName' required/>
                                        </div>
                                        <div className=' col form-group'>
                                            <label htmlFor='phone'>Phone: </label>
                                            <input className='form-control' type='number' id='phone' name='phone' required/>
                                        </div>
                                        <div className=' col form-group'>
                                            <label htmlFor='email'>Email: </label>
                                            <input className='form-control' onInput={handleEmail} value={email} type='email' id='email' name='email' required/>
                                        </div>
                                        <div className=' col form-group'>
                                            <label htmlFor='confirmEmail'>Confirm Email: </label>
                                            <input className='form-control' onInput={handleConfirmEmail} value={confirmEmail} type='email' id='confirmEmail' name='confirmEmail' required/>
                                        </div>
                                        <h4 className='bajada'>Total Amount: ${getCartTotal(cart)}</h4>

                                        {/* Chequear la validez de los mails antes de habilitar el boton para realizar compra */}
                                        {sameEmails ? 
                                            <button type='submit'>Place my order</button>
                                        : 
                                        <>
                                            <p>Please check that your email is the same in both inputs</p>
                                            <button type='submit' disabled>Place my order</button>
                                        </>
                                        }
                                    </form>
                                </div>
                            :
                            //Una vez que se hizo click a procesar compra, mostrar el loading y luego el ID con compra realizada o el error.
                            <>
                            {loading ? 
                                <Loading/> 
                                :
                                id ? 
                                    <p>Your purchase hase been procesed {id}</p> 
                                    :
                                    <p>{err}</p>
                            }
                            </>                 
        }
        </>
    )
}

export default PlaceOrderContainer;