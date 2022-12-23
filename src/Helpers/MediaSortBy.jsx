import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MediaSortBy = ({ changeSortBy, className }) => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <p>Sort by : </p>
      <select name="sort-by" id="" onChange={(e) => changeSortBy(e.target.value)} className="bg-transparent outline-none cursor-pointer active:cursor-pointer">
        <option value="popular" className="bg-slate-700">
          Popular
        </option>
        <option value={pathName === '/tv' ? 'on_the_air' : 'now_playing'} className="bg-slate-700">
          {pathName === '/tv' ? 'Now On Going' : 'Now Playing'}
        </option>
        <option value="top_rated" className="bg-slate-700">
          Top Rated
        </option>
      </select>
    </div>
  );
};

export default MediaSortBy;
