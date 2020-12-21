//Componentes
import Stars from '../Stars/Stars'

//Routes
import { NavLink } from 'react-router-dom'

//Componente renderizado por BOOKLIST Component - Tiene un link que por paramtertos lleva a ItemDetailContainer
function Item({product}) {
    return (
        <div className='my-3 col-lg-4 col-sm-12 px-3 d-flex bookCard'>
            <div>
                <img className="book__img" src={product.img} alt="Book_Cover" />
            </div>
            <div className='ml-2 bookCard__bookDetails'>
                <h5 className='mb-2 fuente'>{product.title}</h5>
                <p className='mb-2 fuente-light'>by {product.author}</p>
                <Stars stars={product.stars}/>
                <NavLink to={`/books/${product.bookId}`}> <button className='my-3 fuente btn btn-outline-info btn-sm'>+ Info</button>  </NavLink>
            </div>
        </div>
    )
}

export default Item;