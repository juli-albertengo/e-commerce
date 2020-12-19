//Estilos


//Recursos


//NavLink
import {NavLink} from 'react-router-dom';


//Componente relleno para darle mas entidad al sitio
function NotFoundContainer(){

    return(
        <div className='container-fluid'>
            <p>Not Found</p>
            <NavLink to={'/'}>
                <button>Go home</button>
            </NavLink>
        </div>

    )
}

export default NotFoundContainer;