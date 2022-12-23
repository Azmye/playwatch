import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Button from '../Buttons/Button';

const NavBarSearch = ({ className }) => {
  const [query, setQuery] = useState();
  const [dQuery, setDQuery] = useState();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const searchKey = location.search;

  const handleSubmit = (e) => {
    navigate({
      pathname: '/results',
      search: createSearchParams({
        query: query,
      }).toString(),
    });
  };

  useEffect(() => {
    if (pathName === '/results') {
      const history = searchParams.get('search');
      setDQuery(history);
    }
  }, [pathName]);

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-1">
          <input
            type="text"
            name="search"
            className="bg-transparent focus:outline-none group focus:bg-transparent autofill:!bg-transparent"
            placeholder={pathName != '/results' ? `Search Movies, Series` : `${dQuery}`}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant={`smallButton`} children={<FaSearch size={18} />} />
        </div>
      </form>
    </div>
  );
};

export default NavBarSearch;
