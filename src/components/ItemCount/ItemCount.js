import React, {useState} from 'react'
import "./ItemCount.scss"

function ItemCount({min, max, onAdd}) {
    const [counter, setCounter] = useState(0);

    const modifCounter = (e) => {
        if(e.target.id === 'agregar' && counter < max){
            setCounter(counter + 1)
            onAdd(counter + 1)
        } else if(e.target.id === 'restar' && counter > min){
            setCounter(counter -1)
            onAdd(counter - 1)
        }
    }

    return (
    <>
     <button id="restar" onClick={modifCounter} className='boton'>Restar</button>
      <p className='counter'>{counter}</p>
     <button id="agregar" onClick={modifCounter} className="boton">Agregar</button>
    </>
    );
}
  
export default ItemCount;