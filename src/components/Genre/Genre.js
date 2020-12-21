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
          <p className='fuente'>Memoirs</p>
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
          <p className='fuente'>Novels</p>
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
          <p className='fuente'>Non-Fiction</p>
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
            <p className='fuente'>Books for Kids</p>
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
          <p className='fuente'>Young Adult</p>
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
          <p className='fuente'>Poetry</p>
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
          <p className='fuente'>Graphic Novels &amp; Comics</p>
        </>
      );
    default: 
      return(<p className='fuente'>Category not found</p>);
  }
}

export default Genre;
