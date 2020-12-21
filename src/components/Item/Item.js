//Estilos
import "./Item.scss";

//Componentes
import Stars from '../Stars/Stars'

//Routes
import { NavLink } from 'react-router-dom'

//Componente renderizado por BOOKLIST Component - Tiene un link que por paramtertos lleva a ItemDetailContainer
function Item({product}) {
    return (
        <div className='bookCard'>
            <div className="bookCard__divImg">
                <img className="bookCard__divImg__img" src={product.img} alt="Book_Cover" />
            </div>
            <div className='ml-2 bookCard__bookDetails'>
                <h5 className='mb-2'>{product.title}</h5>
                <p className='mb-2'>by {product.author}</p>
                <Stars stars={product.stars}/>
                <NavLink to={`/books/${product.bookId}`}> <button className='my-3 bookCard__button'>+ Info</button>  </NavLink>
            </div>
        </div>
    )
}

export default Item;