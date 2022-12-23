import { Link } from 'react-router-dom';
import MovieGrid from '../../Movies/MovieGrid';

const MoviesSection = () => {
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="movie" className="bg-gradient-to-b from-slate-900">
      <div className="pb-20 lg:py-20 px-4 container mx-auto">
        <div className="pb-5 flex justify-between text-white">
          <h2 className="font-semibold text-2xl">Movies</h2>
          <nav>
            <Link onClick={scrollTo} to={'/movie'}>
              View All
            </Link>
          </nav>
        </div>
        <div>
          <MovieGrid />
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;
