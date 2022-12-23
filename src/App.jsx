import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import MovieDetail from './Components/Movies/Details/MovieDetails';
import NavBar from './Components/NavBar/NavBar';
import SeriesDetail from './Components/Series/Details/SeriesDetail';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import SearchResult from './Pages/SearchResult';
import Series from './Pages/Series';

const App = () => {
  document.title = 'Playwatch';
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Series />} />
        <Route path="/tv/:id" element={<SeriesDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/results" element={<SearchResult />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
