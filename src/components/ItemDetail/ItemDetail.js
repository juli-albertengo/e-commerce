//Estilos
import "./ItemDetail.scss";

//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';

//NavLink & Sate
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

//Context
import {useAppContext} from '../../context/useAppContext'

//Componente renderizado por ItemDetailContainer, recibe por props el producto en cuestion y se linkea al appContext para sumar productos/items/libros al carrito
function ItemDetail({ product, photo }) {
    const [units, setUnits] = useState(1)

    const comprarUnidades = (value) => {
        setUnits(value);
    }

    const {handleBuy} = useAppContext()


    return (
        <>
            <div className='bookCard'>
                <div className="bookCard__divImg">
                    <img className="bookCard__divImg__img" src={photo} alt="Book_Cover" />
                </div>
                <div className='bookCard__bookDetails'>
                    <h5 className='bookCard__bookTitle'>{product.title}</h5>
                    <p className='bookCard__bookAuthor'>by {product.author}</p>
                    <p className='bookCard__bookStars'>{product.stars}</p>
                    <p className='bookCard__bookPrice'>${product.price}</p>
                    <ItemCounter min="1" max="10" initialValue={1} onAdd={comprarUnidades}/>
                    <div className="bookCard__comprarDiv">
                        <NavLink to='/myCart'><button onClick={() => {handleBuy(product, units)}} className='bookCard__button--comprar'>Buy {units}</button></NavLink>
                    </div>
                </div>
            </div>
            <div className='description'>
                <h3 className='titulo'>Description</h3>
                <p>{product.description}</p>
            </div>
            <div className='moreInfo'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Genre</h5>
                        <p className='moreInfo__p'>{product.genre}</p>
                    </div>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Release Date</h5>
                        <p className='moreInfo__p'>{product.realeasedDate}</p>
                    </div>
                    <div className='col-lg-4 col-md-12 co-sm-12'>
                        <h5 className='moreInfo__p'>Length</h5>
                        <p className='moreInfo__p'>{product.length}</p>
                    </div>
                </div>
            </div>
            <div className='reviews'>
                <h3 className='titulo my-2'>Reviews</h3>
                <p>{product.reviews}</p>
            </div>
        </>
    )
}

export default ItemDetail;