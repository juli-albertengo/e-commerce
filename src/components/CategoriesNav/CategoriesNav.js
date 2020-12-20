//Estilos
//import './CategoriesNav.scss'

//NavLink - RouterParams
import {NavLink} from 'react-router-dom'

function CategoriesNav(){
    return(
        <div className='d-flex justify-content-around mt-4 mb-2 fuente categories'>
            <NavLink to='/browseShelfs/Novels'><p>Novels</p></NavLink>
            <NavLink to='/browseShelfs/Memoirs' ><p>Memoirs</p></NavLink>
            <NavLink to='/browseShelfs/Non-Fiction' ><p>Non-Fiction</p></NavLink>
            <NavLink to='/browseShelfs/Poetry' ><p>Poetry</p></NavLink>
            <NavLink to='/browseShelfs/GraphicNovels&amp;Comics'><p>Graphic Novels &amp; Comics</p></NavLink>
            <NavLink to='/browseShelfs/Young-Adult' ><p>Young Adult</p></NavLink>
            <NavLink to='/browseShelfs/Kids' ><p>Books for Kids</p></NavLink>   
        </div>
    )
}

export default CategoriesNav;