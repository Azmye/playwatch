import useFetch from '../../Hooks/useFetch';
import ContentLoading from '../ContentLoader/ContentLoading';
import MovieItem from './MovieItem';

const MovieGrid = () => {
  const { data: movies, isLoading, error } = useFetch('/discover/movie', 'popularity.desc');
  return (
    <div className={`grid grid-cols-3 gap-3 lg:gap-5 text-white lg:grid-cols-5`}>
      {error && <div>{error}</div>}
      {isLoading && <ContentLoading count={20} />}
      {movies && <MovieItem movies={movies} />}
    </div>
  );
};

export default MovieGrid;
