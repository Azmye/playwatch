import useFetch from '../../Hooks/useFetch';
import ContentLoading from '../ContentLoader/ContentLoading';
import SeriesItem from './SeriesItem';

const SeriesList = ({ series, isLoading, error, paginate, sortBy }) => {
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <ContentLoading count={20} />}
      {series &&
        series.data.results.map((index, id) => (
          <div key={id}>
            <SeriesItem index={index} />
          </div>
        ))}
    </>
  );
};

export default SeriesList;
