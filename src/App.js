import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
  return (
    <header>
      <Navbar/>
      <Home greeting='Guten Tag :)'/>
    </header>
  );
}

export default App;
