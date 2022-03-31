//import logo from './logo.svg';
import './App.css';
import { getMovie, getActor } from './lib/service/movieService.js'

function App() {
  const getMovieData = async () => {
    const movie = await getMovie()
    console.log(movie)
  }
  const getActorData = async () => {
    const actor = await getActor()
    console.log(actor)
  }
  // const getMoviesByActorData = async () => {
  //   const getBoth = await getMoviesByActor()
  //   console.log(getBoth)
  // }
  return (
    <main>
      <button type="button" onClick={getMovieData}>
        Hent Movie
      </button>
      <button type="button" onClick={getActorData}>Hent Actor</button>
      {/* <button type="button" onClick={getMoviesByActorData}>Hent Movie og Actor</button> */}
    </main>

  );
}

export default App;
