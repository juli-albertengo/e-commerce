import React, {useState} from 'react'


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
     <button id="restar" onClick={modifCounter}>Restar</button>
      <p>{counter}</p>
     <button id="agregar" onClick={modifCounter}>Agregar</button>
    </>
    );
}
  
export default ItemCount;