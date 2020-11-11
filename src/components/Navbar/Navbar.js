import CartIcon from "../CartIcon/CartIcon";
import logo from "./logo.png"
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <a className='navbar-brand' href="#"><img src={logo} alt='logo'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbarDiv" id="navbarNavAltMarkup">
                <ul className="navbarDiv__ul">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Browse Shelfs</a>
                    </li>
                </ul>
                <a href="#"><span className="navbar-text">My Cart <CartIcon /></span></a>
           </div>
        </nav>
    );
}

export default Navbar;