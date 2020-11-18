import "./Item.scss";
//Route
import { NavLink } from 'react-router-dom'


function Item({ product, photo }) {
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
                    <NavLink to={`/books/${product.prodId}`}> <button className='bookCard__button'>+ Info</button>  </NavLink>
                </div>
            </div>
        </>
    )
}

export default Item;