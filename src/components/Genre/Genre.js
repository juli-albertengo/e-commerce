//Estilos
//import "./Genre.scss";

//Componente renderizado por ITEMDetail Component - Genre
function Genre({ genreId }) {
  switch (genreId) {
    case 7:
      return (
        <>
          <p className='moreInfo__p'>Graphic Novels &amp; Comics</p>
        </>
      );
    case 6:
      return (
        <>
          <p className='moreInfo__p'>Poetry</p>
        </>
      );
    case 5:
      return (
        <>
          <p className='moreInfo__p'>Young Adult</p>
        </>
      );
    case 4:
      return (
        <>
          <p className='moreInfo__p'>Kids</p>
        </>
      );
    case 3:
      return (
        <>
          <p className='moreInfo__p'>Non-Fiction</p>
        </>
      );
    case 2:
      return (
        <>
          <p className='moreInfo__p'>Novel</p>
        </>
      );
    case 1:
      return (
        <>
          <p className='moreInfo__p'>Memoir</p>
        </>
      )
    default: 
      return(<p>Category not found</p>);
  }
}

export default Genre;
