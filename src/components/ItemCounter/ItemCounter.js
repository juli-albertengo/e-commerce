//Estilos
import "./ItemCounter.scss"

//State
import {useState} from 'react'

//Item counter es reutilizable (En CartItem y en ItemDetail) para llevar la cuenta de las unidades a comprar
function ItemCounter({min, max, onAdd, initialValue}) {
    const [counter, setCounter] = useState(initialValue);

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
            <p className='counter__p bajada'>{counter}</p>
        <button id="agregar" onClick={addToCount} className="counter__boton">+</button>
    </div>
    </>
    );
}
  
export default ItemCounter;