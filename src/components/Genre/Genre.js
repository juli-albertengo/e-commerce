//Estilos
//import "./Genre.scss";

//Componente renderizado por ITEMDetail Component - Genre
function Genre({ genreId }) {
  switch (genreId) {
    case 'Novels':
    case '2':
      return (
        <>
          <p className='moreInfo__p'>Novels</p>
        </>
      );
    case 'Memoirs':
    case '1':
      return (
        <>
          <p className='moreInfo__p'>Memoirs</p>
        </>
      );
    case 'Non-Fiction':
    case '3':
      return (
        <>
          <p className='moreInfo__p'>Non-Fiction</p>
        </>
      );
    case 'Poetry':
    case '6':
      return (
        <>
          <p className='moreInfo__p'>Poetry</p>
        </>
      );
    case 'GraphicNovels&Comics':
    case '7':
      return (
        <>
          <p className='moreInfo__p'>Graphic Novels &amp; Comics</p>
        </>
      );
    case 'Young-Adult':
    case '5':
      return (
        <>
          <p className='moreInfo__p'>Young Adult</p>
        </>
      );
    case 'Kids':
    case '4':
      return (
        <>
          <p className='moreInfo__p'>Books for Kids</p>
        </>
      )
    default: 
      return(<p>Category not found</p>);
  }
}

export default Genre;
