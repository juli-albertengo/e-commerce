//Estilos
import "./Loading.scss";

function Loading() {
    return (
    <div className="text-center loadingDiv">
        <h3 className='my-3 text-center text-secondary loadingDiv__text'>Loading</h3>
        <div className="spinner-border text-secondary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    );
}

export default Loading;