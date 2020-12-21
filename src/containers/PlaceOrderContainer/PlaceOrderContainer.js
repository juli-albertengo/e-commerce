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
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    //Proceso de compra
    const [id, setId] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [processed, setProcessed] = useState(false);
    const [order, setOrder] = useState({})

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

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
            setOrder(newOrder);
            cleanCart()
            setProcessed(true);
            setLoading(false);
        })
    }

    return(
        <div className='container-lg'>
        {/*Si el carrito esta vacio y la compra aun no esta procesada, mostrar boton para que vaya a comparar libros */}
        {cart.length === 0 && !processed ? 
                            <div className='mb-4'>
                                <p className='mt-3'>You haven't selected any item yet!</p>
                                <NavLink to='/browseShelfs'>
                                    <button className='ml-md-5 botonNextRead'>Let's find your next read</button>
                                </NavLink>
                            </div>
                            :
                            //Si el carrito tiene items, y la compra aun no esta procesada, mostar los items del carrito y el form
                            !processed ? 
                                <div className='container-fluid'>
                                    <h2 className='my-3 fuente subrayado'>Place my Order</h2>
                                    {cart.map((purchase, index) => {
                                        return(
                                            <p className='fuente' key={index}>- {purchase.book} ({purchase.units} u.)</p>
                                        ) 
                                    })}
                                    <h4 className='my-3'><span className='fuente subrayado'>Total Amount</span>: ${getCartTotal(cart)}</h4>
                                    <p className='mb-4 fuente'>You'll receive an email in the next 24hs with the delivery details!</p>
                                    <NavLink to='/myCart'>
                                        <button className='botonNextRead'>Change my order</button>
                                    </NavLink>
                                    <form onSubmit={processPurchase} id='buyerForm' className='my-4 row'>
                                        <div className='col-md-4 col-sm-12 form-group'>
                                            <label htmlFor='name' className='fuente'>Name: </label>
                                            <input className='form-control' onInput={handleName} value={name} type='text' id='name' name='name' required/>
                                        </div>
                                        <div className='col-md-4 col-sm-12 form-group'>
                                            <label htmlFor='lastName' className='fuente'>Last Name: </label>
                                            <input className='form-control' onInput={handleLastName} value={lastName} type='text' id='lastName' name='lastName' required/>
                                        </div>
                                        <div className='col-md-4 col-sm-12 form-group'>
                                            <label htmlFor='phone' className='fuente'>Phone: </label>
                                            <input className='form-control' onInput={handlePhone} value={phone} type='number' id='phone' name='phone' required/>
                                        </div>
                                        <div className='col-md-6 col-sm-12 form-group'>
                                            <label htmlFor='email' className='fuente'>Email: </label>
                                            <input className='form-control' onInput={handleEmail} value={email} type='email' id='email' name='email' required/>
                                        </div>
                                        <div className='col-md-6 col-sm-12 form-group'>
                                            <label htmlFor='confirmEmail' className='fuente'>Confirm Email: </label>
                                            <input className='form-control' onInput={handleConfirmEmail} value={confirmEmail} type='email' id='confirmEmail' name='confirmEmail' required/>
                                        </div>
                                        {/* Chequear la validez de los mails antes de habilitar el boton para realizar compra */}
                                        {sameEmails && name !== '' && lastName !== '' && phone !== '' ? 
                                            <button className='my-4 ml-auto botonProcess-goCart' type='submit'>Place my order</button>
                                        : 
                                        <>
                                            <p className='my-3 ml-2 mr-4 fuente'>Please complete all required fields and check that your email is the same in both inputs</p>
                                            <button className='botonProcess-goCart ml-auto' type='submit' disabled>Place my order</button>
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
                                <div className='my-4'>
                                    <h3 className='my-3 fuente subrayado'>Your purchase has been procesed! </h3> 
                                    <h5 className='mb-4fuente '>Here is your purchase ID: {id}</h5>
                                    {order.products.cart.map((item, index) => {
                                        return <p className='fuente' key={index}>- {item.book}</p>
                                    })}
                                    <p className='mb-3 fuente'><span className='subrayado'>Total</span>: US$ {order.total}</p>
                                    <p className='mb-4 fuente'>You'll receive an email in the next 24hs with the delivery details!</p>
                                    <p className='text-right fuente'>If you have any questions, please get in touch: <span className='contact__p'>bookstore@gmail.com</span></p>
                                </div>
                                :
                                <div className='my-4'>
                                    <p className='mb-3 fuente'>There has been an error with your purchase. Please get in touch: bookstore@gmail.com </p> 
                                    <p className='fuente'>{err}</p>
                                </div>
                            }
                            </>                 
        }
        </div>
    )
}

export default PlaceOrderContainer;