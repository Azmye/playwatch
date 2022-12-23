import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';

const NavBarSearch = ({ className }) => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate({
      pathname: '/results/search',
      search: createSearchParams({
        query: query,
      }).toString(),
    });
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-1">
          <input type="text" name="search" className="bg-transparent focus:outline-none group focus:bg-transparent autofill:!bg-transparent" placeholder={`Search Movies, Series`} onChange={(e) => setQuery(e.target.value)} />
          <Button variant={`smallButton`} children={<FaSearch size={18} />} />
        </div>
      </form>
    </div>
  );
};

export default NavBarSearch;
