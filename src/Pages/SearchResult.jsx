import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import SearchContentLoading from '../Components/ContentLoader/SearchContentLoading';
import SearchItem from '../Components/Search/SearchItem';
import useFetch from '../Hooks/useFetch';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isLoading, error } = useFetch(`/search/multi`, '', `${query}`);
  return (
    <section id="Movies" className="bg-slate-900">
      <div className="bg-gradient-to-r from-slate-700 via-slate-800/30 to-slate-800">
        <div className={`mx-auto container ${(isLoading && data?.data.results.length > 0) || data === null || undefined ? 'h-[100vh]' : ''}`}>
          <div className=" py-20 px-4">
            <div className="flex flex-col gap-5 text-white">
              <h2 className="font-semibold text-2xl">Results {!isLoading && data?.data.results.length} :</h2>
              {error && <div>{error.request.status === 422 ? `Found nothing here` : error.message}</div>}
              {isLoading && <SearchContentLoading />}
              {data && data.data.results.length < 1 ? <div className="h-[100vh]">Found nothing here</div> : ''}
              {data && <SearchItem media={data} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
