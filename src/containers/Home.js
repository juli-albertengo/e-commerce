import Navbar from "../components/Navbar/Navbar";
import ItemCount from "../components/ItemCount/ItemCount"

function Home(props) {

    const showConsole = (value) => {
        console.log(value)
    }
    
    return (
    <>
     <Navbar/>
     <p>{props.greeting}</p>
     <ItemCount min="1" max="10" onAdd={showConsole}/>
    </>
    );
}
  
export default Home;