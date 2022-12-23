import { useEffect, useState } from 'react';
import useFetch from '../../../Hooks/useFetch';

const SeriesContentRatings = ({ url }) => {
  const { data: ratings, isLoading, error } = useFetch(url);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    if (!isLoading && ratings.data.results.length >= 1) {
      const usRate = ratings.data.results.find((index) => {
        return index.iso_3166_1 === 'US';
      });
      const elseRate = ratings.data.results.slice(0, 1).map((index) => {
        return index.rating;
      });
      if (usRate !== undefined) {
        setRating(usRate.rating);
      } else {
        setRating(elseRate);
      }
    } else {
      setRating('not rated');
    }
  }, [ratings]);
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>not rated</div>}
      {rating === null ? 'not rated' : rating}
    </>
  );
};

export default SeriesContentRatings;
