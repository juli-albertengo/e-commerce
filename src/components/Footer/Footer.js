//Estilos
import "./Footer.scss";

//Recursos - Logo
import logo from "./logo.png"

function Footer() {
    return (
        <>
         <div className="footer">
             <p className="footer__p">Developed by <a className="footer__p__a" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julieta-albertengo/">Julieta Albertengo</a></p>
             <div className="footer__divImg">
                <img className="footer__divImg__img" src={logo} alt='logo'/>
             </div>
         </div>
        </>
    );
}

export default Footer;