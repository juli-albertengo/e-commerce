import './Home.scss'

function Home(props) {
    return (
    <div>
     <p className='greeting'>{props.greeting}</p>
    </div>
    );
}
  
export default Home;