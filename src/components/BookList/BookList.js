import Item from '../Item/Item'
import "./BookList.scss";

//Para resolver lo delas fotos provisoriamente
import educated from "./educated.png";
import badblood from "./badblood.png";
import sgt from "./sgt.PNG"
import rosie from "./rosie.png"
import thechoice from "./thechoice.png"
import lookingforalaska from "./lookingforalaska.png"
import littlewomen from "./littlewomen.png"
import extremely from "./extremely.png"

const photos = [educated, sgt, badblood, rosie, thechoice, lookingforalaska, littlewomen, extremely]

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



