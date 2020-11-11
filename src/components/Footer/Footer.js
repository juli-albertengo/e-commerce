import logo from "./logo.png"
import "./Footer.scss";


function Footer() {
    return (
        <>
         <div className="footer">
             <p className="footer__p">Developed by <a className="footer__p__a" href="https://www.linkedin.com/in/julieta-albertengo/">Julieta Albertengo</a></p>
             <div className="footer__divImg">
                <img className="footer__divImg__img" src={logo} alt='logo'/>
             </div>
         </div>
        </>
    );
}

export default Footer;