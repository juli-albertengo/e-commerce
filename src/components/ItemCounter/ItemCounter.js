import React, {useState} from 'react'
import "./ItemCounter.scss"

function ItemCounter({min, max, onAdd}) {
    const [counter, setCounter] = useState(1);

    const addToCount = () => {
        if (counter < max){
            setCounter(counter + 1)
            onAdd(counter + 1)   
        } 
    }

    const substractToCount = () =>{
        if(counter > min){
            setCounter(counter -1)
            onAdd(counter - 1)
        }
    }

    return (
    <>
    <div className='counterDiv'>
         <button id="restar" onClick={substractToCount} className='counter__boton'>-</button>
            <p className='counter__p'>{counter}</p>
        <button id="agregar" onClick={addToCount} className="counter__boton">+</button>
    </div>
    </>
    );
}
  
export default ItemCounter;