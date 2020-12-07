//Estilos
//import "./Stars.scss";

//Recursos
import star from "./star.png";

//Componente renderizado por ITEM Component - Estrellas de puntuacion
function Stars({ stars }) {
  switch (stars) {
    case 5:
      return (
        <div className="d-flex">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      );
    case 4:
      return (
        <div className="d-flex">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      );
    case 3:
      return (
        <div className="d-flex">
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      );
    case 2:
      return (
        <div className="d-flex">
          <img src={star} />
          <img src={star} />
        </div>
      );
    case 1:
      return (
        <div className="d-flex">
          <img src={star} />
        </div>
      );
  }
}

export default Stars;
