import {useState} from 'react'
import "./ItemDetail.scss";
import ItemCounter from '../ItemCounter/ItemCounter';
import {NavLink} from 'react-router-dom'

function ItemDetail({ product, photo }) {
    const [units, setUnits] = useState(1)

    const comprarUnidades = (value) => {
        setUnits(value);
    }
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
                    <ItemCounter min="1" max="10" onAdd={comprarUnidades}/>
                    <div className="bookCard__comprarDiv">
                    <NavLink to='/myCart'><button className='bookCard__button--comprar'>Comprar {units}</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;