//Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Containers
import Home from './containers/HomeContainer/HomeContainer';
import AboutUs from './containers/AboutusContainer/AboutUsContainer';
import BrowseShelfs from './containers/BrowseShelfsContainer/BrowseShelfsContainer';
import BrowseShelfsFilteredContainer from './containers/BrowseShelfsFilteredContainer/BrowseShelfsFilteredContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import PlaceOrderContainer from './containers/PlaceOrderContainer/PlaceOrderContainer';
import NotFoundContainer from './containers/NotFoundContainer/NotFoundContainer';

//Components
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'

//Router
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//ContextProvider
import {AppProvider} from './context/useAppContext';

function App() {
  return (
    <>
    <AppProvider>
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
            <Route exact path='/browseShelfs/:genreId'>
              <BrowseShelfsFilteredContainer/>
            </Route>
            <Route exact path='/myCart'>
              <CartContainer />
            </Route>
            <Route exact path='/placeOrder'>
              <PlaceOrderContainer />
            </Route>
            <Route exact path='/404'>
              <NotFoundContainer />
            </Route>
            <Redirect to="/404" />
          </Switch>
          <Footer/>
        </BrowserRouter>
    </AppProvider>
    </>
  );
}

export default App;
