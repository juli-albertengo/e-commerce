//Estilos
import '../../containers/ItemDetailContainer/ItemDetailContainer.scss'

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
            <div className='row mt-3'>
                <div className="col-lg-3 col-md-6 text-center mb-2">
                    <img className="img-fluid" src={product.img} alt="Book_Cover" />
                </div>
                <div className='col-lg-6 col-md-6'>
                    <h3 className='fuente mb-2'>{product.title}</h3>
                    <p className='fuente mb-2'>by {product.author}</p>
                    <Stars stars={product.stars}/>
                    <p className='fuente my-3'>Price: US$ {product.price}</p>
                    {/*Chequar si hay stock */}
                    {product.stock <= 0 ?
                        <div>
                            <p className='fuente' >Sorry, we are out of stock!</p>
                            <NavLink to='/browseShelfs'>
                                <button className='ml-md-5 botonNextRead'>Let's find your next read</button>
                            </NavLink>
                        </div> :
                        <div>
                            {/*Chequears si el libro no esta ya en el cart */}
                            {cart.find(cartItem => cartItem.book === product.title) ? 
                            <>
                                <p className='fuente'>The book has been added to your cart!</p>
                                <NavLink to='/browseShelfs'>
                                    <button className='ml-md-5 mb-2 botonNextRead'>Let's find more books!</button>
                                </NavLink>
                                <NavLink to='/myCart'>
                                    <button className='ml-md-5 mb-2 botonGoCart'>Go to my cart!</button>
                                </NavLink>
                            </>
                            :
                            <div className='d-flex alig-items-center'>
                                <ItemCounter min="1" max="10" initialValue={1} onAdd={comprarUnidades}/>
                                <button onClick={() => {handleBuy(product, units)}} className=' ml-5 botonComprar'>Buy {units}</button>
                            </div>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className='description mt-4'>
                <h3 className='fuente'>Description</h3>
                <p className='description__p'>{product.description}</p>
            </div>
            <div className='moreInfo container-fluid pt-2'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-4 col-sm-12 text-center moreInfo__div'>
                        <h5 className='fuente mt-1'>Genre</h5>
                        <Genre genreId={product.genreId} />
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center moreInfo__div'>
                        <h5 className='fuente mt-1'>Released Date</h5>
                        <p className='fuente'>{product.releasedDate}</p>
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center'>
                        <h5 className='fuente mt-1'>Length</h5>
                        <p className='fuente'>{product.length} pages</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;