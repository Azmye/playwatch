import { useEffect, useState } from 'react';
import useFetch from '../../../Hooks/useFetch';

const MovieContentRatings = ({ url }) => {
  const { data: ratings, isLoading, error } = useFetch(url);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    if (!isLoading) {
      const findUsRate = ratings.data.results.find((index) => {
        return index.iso_3166_1 === 'US';
      });
      if (findUsRate !== undefined || null) {
        const certif = findUsRate.release_dates.map((index) => {
          return index.certification;
        });
        setRating(certif.pop());
      } else {
        return;
      }
    }
  }, [ratings, rating]);
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>not rated</div>}
      {(rating && rating !== undefined) || null ? rating : 'not rated'}
    </>
  );
};

export default MovieContentRatings;
