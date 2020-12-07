//Estilos
import "./BookList.scss";

//Componentes
import Item from '../Item/Item'

//Map que devuelve el componente ITEM - por cada libro recibido en products/props que vienen de la home
function BookList({ products }) {
    return (
        <div className="container-fluid">
            <div className="latestBooks">
                {products.map((book, index) => {
                    return <Item key={index} product={book} />
                })}
            </div>
        </div>
    )
}

export default BookList;



