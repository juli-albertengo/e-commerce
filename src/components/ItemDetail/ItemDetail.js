//Estilos
import "./ItemDetail.scss";

//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';
import Stars from '../Stars/Stars'
import Genre from '../Genre/Genre'

//NavLink & Sate
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'

//Componente renderizado por ItemDetailContainer, recibe por props el producto en cuestion y se linkea al appContext para sumar productos/items/libros al carrito
function ItemDetail({ product}) {
    const {handleBuy} = useAppContext()
    const [units, setUnits] = useState(1)
    const comprarUnidades = (value) => {
        setUnits(value);
    }

    //NOTIFICACION DE ITEM AGREGADO AL CARRITO
    const [show, setShow] = useState(false);
    const showNotif = () => {
        setShow(true);
    }
    const dismiss = () => {
        setShow(false);
    }
    return (
        <>
            <div className={show ? 'showIt' : 'dontShowIt'}>
                <p className='m-1'>The book has been added to your Cart!</p>
                <button onClick={() => dismiss()} className='ml-4 my-2 dismiss'>Dismiss</button>
            </div>
            <div className='bookCard'>
                <div className="bookCard__divImg">
                    <img className="bookCard__divImg__img" src={product.img} alt="Book_Cover" />
                </div>
                <div className='bookCard__bookDetails'>
                    <h3 className='bookCard__bookTitle'>{product.title}</h3>
                    <p className='bookCard__bookAuthor'>by {product.author}</p>
                    <Stars stars={product.stars}/>
                    <p className='bookCard__bookPrice'>Price: ${product.price} USD</p>
                        {product.stock <= 0 ?
                        <div className="bookCard__comprarDiv">
                            <p className='' >Sorry, we are out of stock!</p>
                            <NavLink to='/browseShelfs'>
                                <button className='ml-5 boton'>Let's find your next read</button>
                            </NavLink>
                            </div> :
                            <>
                            <ItemCounter min="1" max="10" initialValue={1} onAdd={comprarUnidades}/>
                            <div className="bookCard__comprarDiv">
                               {/* <NavLink to='/myCart'><button  data-bs-toggle="modal" data-bs-target="#continueShopping" onClick={() => {handleBuy(product, units)}} className='bookCard__button--comprar' type='button'>Buy {units}</button></NavLink>
                                */}
                                <button onClick={() => {handleBuy(product, units); showNotif()}} className='bookCard__button--comprar'>Buy {units}</button>
                            </div>
                            </>
                        }
                </div>
            </div>
            <div className='description'>
                <h3 className='titulo'>Description</h3>
                <p>{product.description}</p>
            </div>
            <div className='moreInfo mb-4'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Genre</h5>
                        <Genre genreId={parseInt(product.genreId)} />
                    </div>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Released Date</h5>
                        <p className='moreInfo__p'>{product.releasedDate}</p>
                    </div>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Length</h5>
                        <p className='moreInfo__p'>{product.length} pages</p>
                    </div>
                </div>
            </div>
            {/*
            <div className='reviews'>
            <h3 className='titulo my-2'>Reviews</h3>
            <p>{product.reviews}</p>
        </div>
                */
            }
        </>
    )
}

export default ItemDetail;