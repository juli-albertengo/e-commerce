//Estilos
import "./BookList.scss";

//Recursos - Para resolver lo delas fotos provisoriamente
import educated from "./educated.png";
import badblood from "./badblood.png";
import sgt from "./sgt.PNG"
import rosie from "./rosie.png"
import thechoice from "./thechoice.png"
import lookingforalaska from "./lookingforalaska.png"
import littlewomen from "./littlewomen.png"
import extremely from "./extremely.png"

//Componentes
import Item from '../Item/Item'

const photos = [educated, sgt, badblood, rosie, thechoice, lookingforalaska, littlewomen, extremely]

//Map que devuelve el componente ITEM - por cada libro recibido en products/props que vienen de la home
function BookList({ products }) {
    return (
        <div className="container-fluid">
            <h2 className="container__p">Latest 2020!</h2>
            <div className="latestBooks">
                {products.map((book, index) => {
                    return <Item key={index} product={book} photo={photos[index]} />
                })}
            </div>
        </div>
    )
}

export default BookList;



