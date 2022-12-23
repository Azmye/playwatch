import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MediaGridList from '../Helpers/MediaGridList';
import SeriesList from '../Components/Series/SeriesList';
import useFetch from '../Hooks/useFetch';

const Series = () => {
  const [sortBy, setSortBy] = useState('popular');

  const pageNumberLimit = 8;
  const pages = [];
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(8);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const { data: series, isLoading, error } = useFetch(`/tv/${sortBy}`, currentPage);

  //page incremented
  const incrementPage = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //page decremented
  const decrementPage = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //sort by list
  const onChangeSortBy = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  //onChangePageRange
  const onChangePageRange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //page range
  useEffect(() => {
    if (!isLoading) {
      for (let i = 1; i < series.data.total_pages; i++) {
        pages.push(i);
        setTotalPages(pages);
      }
    }
  }, [series, currentPage]);

  const pageNumbers = totalPages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li key={page} id={page} onClick={() => onChangePageRange(page)} className={`px-2 cursor-pointer hover:text-sky-500 ${currentPage === page ? 'text-sky-500' : null} `}>
          {page}
        </li>
      );
    } else {
      return null;
    }
  });
  return (
    <section id="TV-Shows" className="bg-slate-900">
      <div className="bg-gradient-to-r from-slate-700 via-slate-800/30 to-slate-800">
        <div className="mx-auto container">
          <div className="py-20 px-4">
            <MediaGridList title={`TV Shows`} children={<SeriesList series={series} isLoading={isLoading} error={error} paginate={currentPage} sortBy={sortBy} />} changeSortBy={onChangeSortBy} />
            <div className="flex justify-center lg:justify-end">
              <div className="flex items-center gap-2 text-white pt-5">
                <div className="flex items-center gap-2">
                  <button className="bg-white rounded-full text-slate-900 p-1 disabled:opacity-80" disabled={currentPage <= 1 ? true : false} onClick={decrementPage}>
                    <FaArrowLeft />
                  </button>
                  <div className="flex items-center">
                    <ul className="flex border rounded-full divide-x text-lg font-semibold">{!isLoading ? pageNumbers : ''}</ul>
                  </div>
                  <button className="bg-white rounded-full text-slate-900 p-1" onClick={incrementPage}>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Series;
