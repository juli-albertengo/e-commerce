//Estilos

//Recursos

//NavLink
import {NavLink} from 'react-router-dom';

//Componente 404
function NotFoundContainer(){

    return(
        <div className='container-fluid'>
            <p>There's nothing to see here!</p>
            <NavLink to={'/'}>
                <button>Let's find your next read!</button>
            </NavLink>
        </div>

    )
}

export default NotFoundContainer;