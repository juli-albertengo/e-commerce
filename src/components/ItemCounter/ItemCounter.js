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
    <div className='d-flex align-items-center'>
         <button id="restar" onClick={substractToCount} className='btn btn-outline-info btn-sm mx-2'>-</button>
            <p className='fuente m-0 mx-1'>{counter}</p>
        <button id="agregar" onClick={addToCount} className="btn btn-outline-info btn-sm mx-2">+</button>
    </div>
    </>
    );
}
  
export default ItemCounter;