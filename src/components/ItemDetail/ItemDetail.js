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
    const {handleBuy, cart} = useAppContext()
    const [units, setUnits] = useState(1)
    const comprarUnidades = (value) => {
        setUnits(value);
    }

    return (
        <>
            <div className='bookCard'>
                <div className="bookCard__divImg">
                    <img className="bookCard__divImg__img" src={product.img} alt="Book_Cover" />
                </div>
                <div className='bookCard__bookDetails'>
                    <h3 className='bookCard__bookTitle'>{product.title}</h3>
                    <p className='bookCard__bookAuthor'>by {product.author}</p>
                    <Stars stars={product.stars}/>
                    <p className='bookCard__bookPrice'>Price: ${product.price} USD</p>
                    {/*Chequar si hay stock */}
                    {product.stock <= 0 ?
                        <div className="bookCard__comprarDiv">
                            <p className='' >Sorry, we are out of stock!</p>
                            <NavLink to='/browseShelfs'>
                                <button className='ml-5 boton'>Let's find your next read</button>
                            </NavLink>
                        </div> :
                        <div className="bookCard__comprarDiv">
                            {/*Chequears si el libro no esta ya en el cart */}
                            {cart.find(cartItem => cartItem.book === product.title) ? 
                            <>
                                <p>The book has been added to your cart!</p>
                                <NavLink to='/myCart'>
                                    <button className='ml-5 boton'>Go to my cart!</button>
                                </NavLink>
                                <NavLink to='/browseShelfs'>
                                    <button className='ml-5 boton'>Let's find more books!</button>
                                </NavLink>
                            </>
                            :
                            <>
                                <ItemCounter min="1" max="10" initialValue={1} onAdd={comprarUnidades}/>
                                <button onClick={() => {handleBuy(product, units)}} className='bookCard__button--comprar'>Buy {units}</button>
                            </>
                            }
                        </div>
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
                        <Genre genreId={product.genreId} />
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
        </>
    )
}

export default ItemDetail;