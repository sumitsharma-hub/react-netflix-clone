import './App.css';
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginal} islargeRow />
      <Row title="Top trending" fetchUrl={requests.fetchTrending} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DocumentryMovies" fetchUrl={requests.fetchDocumentryMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
