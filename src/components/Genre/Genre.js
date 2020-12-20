//Estilos
//import "./Genre.scss";

//Componente renderizado por Item Detail y en Browse Shelfs para el titulo de cada categoria
function Genre({ genreId }) {
  switch (genreId) {
    case 'Memoirs':
    case '1':
      return (
        <>
          <p className='moreInfo__p'>Memoirs</p>
        </>
      );
    case 'Novels':
    case '2':
      return (
        <>
          <p className='moreInfo__p'>Novels</p>
        </>
      );
    case 'Non-Fiction':
    case '3':
      return (
        <>
          <p className='moreInfo__p'>Non-Fiction</p>
        </>
      );
    case 'Kids':
    case '4':
        return (
          <>
            <p className='moreInfo__p'>Books for Kids</p>
          </>
        )
    case 'Young-Adult':
    case '5':
      return (
        <>
          <p className='moreInfo__p'>Young Adult</p>
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
    default: 
      return(<p>Category not found</p>);
  }
}

export default Genre;
