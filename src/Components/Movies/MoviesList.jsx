import ContentLoading from '../ContentLoader/ContentLoading';
import MovieItem from './MovieItem';

const MoviesList = ({ movies, isLoading, error }) => {
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <ContentLoading count={20} />}
      {movies && <MovieItem movies={movies} />}
    </>
  );
};

export default MoviesList;
