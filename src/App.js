import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './containers/HomeContainer/HomeContainer'
import AboutUs from './containers/AboutusContainer/AboutUsContainer'
import BrowseShelfs from './containers/BrowseShelfsContainer/BrowseShelfsContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'

//Router
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/books/:bookId'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs />
          </Route>
          <Route exact path='/browseShelfs'>
            <BrowseShelfs />
          </Route>
          <Route exact path='/myCart'>
            <CartContainer />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
