import useFetch from '../../../Hooks/useFetch';

const SeriesCredits = ({ url }) => {
  const { data: credits, isLoading, error } = useFetch(url);
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>...</div>}
      {credits && credits.data.cast.slice(0, 3).map((index, id) => <li key={id}>{(id ? ', ' : '') + index.name}</li>)}
    </>
  );
};

export default SeriesCredits;
