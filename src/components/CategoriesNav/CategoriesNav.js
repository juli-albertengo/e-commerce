//Estilos
import '../../containers/BrowseShelfsContainer/BrowseShelfsContainer.scss'

//NavLink - RouterParams
import {NavLink} from 'react-router-dom'

function CategoriesNav(){
    return(
        <div className='row mx-auto mt-4 mb-2'>
            <div className='col-lg-3 col-md-6'>
                <NavLink to='/browseShelfs/Novels' className='categories'><p className='categories__link'>Novels</p></NavLink>
                <NavLink to='/browseShelfs/Memoirs' className='categories'><p>Memoirs</p></NavLink>
            </div>
            <div className='col-lg-3 col-md-6'>
                <NavLink to='/browseShelfs/Non-Fiction' className='categories'><p>Non-Fiction</p></NavLink>
                <NavLink to='/browseShelfs/Poetry' className='categories'><p>Poetry</p></NavLink>
            </div>
            <div className='col-lg-3 col-md-6'>
                <NavLink to='/browseShelfs/Young-Adult' className='categories'><p>Young Adult</p></NavLink> 
                <NavLink to='/browseShelfs/Kids' className='categories'><p>Books for Kids</p></NavLink>  
            </div>
            <div className='col-lg-3 col-md-6'>
                <NavLink to='/browseShelfs/GraphicNovels&amp;Comics' className='categories'><p>Graphic Novels &amp; Comics</p></NavLink>
            </div>
        </div>
    )
}

export default CategoriesNav;