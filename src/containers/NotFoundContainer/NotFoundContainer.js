//NavLink
import {NavLink} from 'react-router-dom';

//Componente 404
function NotFoundContainer(){

    return(
        <div className='container-lg'>
            <h2 className='my-3 fuente'>There's nothing to see here!</h2>
            <NavLink to={'/'}>
                <button className='my-3 botonNextRead'>Let's find your next read!</button>
            </NavLink>
        </div>

    )
}

export default NotFoundContainer;