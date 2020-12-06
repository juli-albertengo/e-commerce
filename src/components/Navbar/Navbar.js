//Estilos
import "./Navbar.scss";

//Recursos - Logo
import logo from "./logo.png"

//Componentes
import CartIcon from "../CartIcon/CartIcon";

//Routes
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to='/'><img src={logo} alt='logo'/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbarDiv" id="navbarNavAltMarkup">
                <ul className="navbarDiv__ul">
                    <li className="nav-item">
                        <NavLink to='/aboutus'><p className='navbar-text'>About us</p> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/browseShelfs'><p className="navbar-text">Browse Shelfs</p></NavLink>
                    </li>
                </ul>
                <NavLink to='/myCart'><span className="navbar-text">My Cart <CartIcon /></span></NavLink>
           </div>
        </nav>
    );
}

export default Navbar;