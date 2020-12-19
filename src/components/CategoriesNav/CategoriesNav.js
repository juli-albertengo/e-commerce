//Estilos
//import './CategoriesNav.scss'

//NavLink - RouterParams
import {NavLink} from 'react-router-dom'

function CategoriesNav(){
    return(
        <div className='d-flex justify-content-around mt-4 mb-2 fuente categories'>
            <NavLink to='/browseShelfs/2'><p>Novels</p></NavLink>
            <NavLink to='/browseShelfs/1' ><p>Memoirs</p></NavLink>
            <NavLink to='/browseShelfs/3' ><p>Non-Fiction</p></NavLink>
            <NavLink to='/browseShelfs/6' ><p>Poetry</p></NavLink>
            <NavLink to='/browseShelfs/7'><p>Graphic Novels &amp; Comics</p></NavLink>
            <NavLink to='/browseShelfs/5' ><p>Young Adult</p></NavLink>
            <NavLink to='/browseShelfs/4' ><p>Kids</p></NavLink>   
        </div>
    )
}

export default CategoriesNav;