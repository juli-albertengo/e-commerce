//Estilos

//Context
import {useAppContext} from '../../context/useAppContext'
import { useState } from 'react';

//Components
import Loading from "../../components/Loading/Loading"

//Routes
import { NavLink } from 'react-router-dom'

//Firbase
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';


function PlaceOrderContainer(){
    const {cart, getCartTotal} = useAppContext();
    const [total] = useState(getCartTotal(cart))
    const [id, setId] = useState('')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false);

    const processPurchase = (e) => {
        setLoading(true)
        e.preventDefault()
        let buyersName = document.getElementById('name').value;
        let buyersLastName = document.getElementById('lastName').value;
        let buyersPhone = document.getElementById('phone').value;
        let buyersEmail = document.getElementById('email').value;
        let buyer = {name: buyersName, LastName: buyersLastName, phone: buyersPhone, email: buyersEmail};
        const db = getFirestore();
        const ventas = db.collection("orders");
        const newOrder = {
            buyer: buyer,
            products: {cart},
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
        ventas.add(newOrder).then(({id}) => {
            setId(id);
            setLoading(false);
        }).catch(err => {
            setErr(err);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        })
    }
    
    return(
        <>
        {cart.length === 0 ? 
                            <div className='mb-4'>
                            <p className='bajada'>You haven't selected any item yet!</p>
                            <NavLink to='/browseShelfs'>
                                <button className='ml-5 boton'>Let's find your next read</button>
                            </NavLink>
                            </div>:
                            <>
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
                                <input className='form-control' type='email' id='email' name='email' required/>
                            </div>
                            <h4 className='bajada'>Total Amount: ${total}</h4>
                            <button type='submit'>Place my order</button>
                        </form>
                </div>
                {loading ? <Loading/> :
                    id ? 
                    <p>{id}</p> :
                    <p>{err}</p>
                }  
                        </>                 
        }
</>
    )
}

export default PlaceOrderContainer;