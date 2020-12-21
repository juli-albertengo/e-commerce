//Componentes
import Item from '../Item/Item'

//Map que devuelve el componente ITEM - por cada libro recibido en products(props que vienen de BorwseShelfsFilteredContainer)
function FilteredBookList({ products }) {
    return (
        <div className="row">
            {products.map((book, index) => {
                return <Item key={index} product={book} />
            })}
        </div>
    )
}

export default FilteredBookList;
