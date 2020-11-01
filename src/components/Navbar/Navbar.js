import './Navbar.scss';
import CartIcon from "../CartIcon/CartIcon";

function Navbar() {
    return (
    <nav className="navbar">
        <a className="navbar__brand" href="#">Bookstore</a>
        <button className="navbar__toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar__toggler__icon"></span>
        </button>
        <div className="navbar__collapseDiv" id="navbarNavAltMarkup">
            <div className="navbar__innerDiv">
                <a class="navbar__innerDiv__link" href="#">Home</a>
                <a class="navbar__innerDiv__link" href="#">About</a>
                <a class="navbar__innerDiv__link" href="#">Browse Shelfs</a>
                <CartIcon/>
            </div>
        </div>
    </nav>
    );
}
  
export default Navbar;