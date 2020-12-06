//Estilos
import "./Loading.scss";

function Loading() {
    return (
    <div className="loadingDiv">
        <h3 className='loadingDiv__text'>Loading</h3>
        <div className="loadingDiv__spinnerDiv" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="loadingDiv__spinnerDiv__spinner">Loading...</span>
        </div>
    </div>
    );
}

export default Loading;