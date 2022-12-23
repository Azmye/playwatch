import { Link } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import SlideContent from '../../ContentLoader/SlideContent';
import MovieSlides from '../MovieSlides';

const MovieRecomm = ({ url }) => {
  const { data: Movie, isLoading, error } = useFetch(url);
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="movie-recommendations" className="bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="px-4 py-20 mx-auto container">
        <div className="pb-5 flex justify-between text-white">
          <h2 className="font-semibold text-2xl">{!isLoading && Movie.data.total_results <= 0 ? '' : 'Movies Recommendations'}</h2>
        </div>
        <div>
          {error && <div>{error}</div>}
          {isLoading && <SlideContent />}
          {Movie && <MovieSlides movies={Movie} onclick={scrollTo} />}
        </div>
      </div>
    </section>
  );
};

export default MovieRecomm;
