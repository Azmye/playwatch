import { Link } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import SlideContent from '../../ContentLoader/SlideContent';
import SeriesSlider from '../SeriesSlider';

const SeriesRecomm = ({ url }) => {
  const { data: series, isLoading, error } = useFetch(url);
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section id="tv-recommendations" className="bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="px-4 py-20 mx-auto container">
        <div className="pb-5 flex justify-between text-white">
          <h2 className="font-semibold text-2xl">TV Recommendations</h2>
        </div>
        <div>
          {error && <div>{error}</div>}
          {isLoading && <SlideContent />}
          {series && <SeriesSlider series={series} onclick={scrollTo} />}
        </div>
      </div>
    </section>
  );
};

export default SeriesRecomm;
