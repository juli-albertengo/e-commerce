//Router
import {NavLink} from 'react-router-dom';

//Componente renderizado por Item Detail y en Browse Shelfs para el titulo de cada categoria
function Genre({ genreId }) {
  switch (genreId) {
    case 'Memoirs':
      return (
        <>
          <h2 className='fuente'>Memoirs</h2>
        </>
      );
    case '1':
      return (
        <> 
          <NavLink to='/browseShelfs/Memoirs' className='similLink'>
            <p className='fuente'>Memoirs</p>
          </NavLink>
        </>
      );
    case 'Novels':
      return (
        <>
          <h2 className='fuente'>Novels</h2>
        </>
      );
    case '2':
      return (
        <>
          <NavLink to='/browseShelfs/Novels' className='similLink'>
            <p className='fuente'>Novels</p>
          </NavLink>
        </>
      );
    case 'Non-Fiction':
      return (
        <>
          <h2 className='fuente'>Non-Fiction</h2>
        </>
      );
    case '3':
      return (
        <>
          <NavLink to='/browseShelfs/Non-Fiction' className='similLink' >
            <p className='fuente'>Non-Fiction</p>
          </NavLink>
        </>
      );
    case 'Kids':
      return (
        <>
          <h2 className='fuente'>Books for Kids</h2>
        </>
      )
    case '4':
        return (
          <>
            <NavLink to='/browseShelfs/Kids' className='similLink'>
              <p className='fuente'>Kids</p>
            </NavLink>
          </>
        )
    case 'Young-Adult':
      return (
        <>
          <h2 className='fuente'>Young Adult</h2>
        </>
      );
    case '5':
      return (
        <>
          <NavLink to='/browseShelfs/Young-Adult' className='similLink'>
            <p className='fuente'>Young Adult</p>
          </NavLink>
        </>
      );
    case 'Poetry':
      return (
        <>
          <h2 className='fuente'>Poetry</h2>
        </>
      );
    case '6':
      return (
        <>
          <NavLink to='/browseShelfs/Poetry' className='similLink'>
            <p className='fuente'>Poetry</p>
          </NavLink>
        </>
      );
    case 'GraphicNovels&Comics':
      return (
        <>
          <h2 className='fuente'>Graphic Novels &amp; Comics</h2>
        </>
      );
    case '7':
      return (
        <>
          <NavLink  to='/browseShelfs/GraphicNovels&amp;Comics' className='similLink'>
            <p className='fuente'>Graphic Novels &amp; Comics</p>
          </NavLink>
        </>
      );
    default: 
      return(<p className='fuente'>Category not found</p>);
  }
}

export default Genre;
