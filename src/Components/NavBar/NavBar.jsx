import NavBarTitle from './NavBarTitle';
import NavBarSearch from './NavBarSearch';
import NavBarMenu from './NavBarMenu';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

const NavBar = () => {
  const [navBarOnScroll, setNavBarOnScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleNavNarScroll = () => {
    if (window.scrollY >= 72) {
      setNavBarOnScroll(true);
    } else {
      setNavBarOnScroll(false);
    }
  };

  window.addEventListener('scroll', handleNavNarScroll);
  return (
    <header className={`py-4 fixed left-0 right-0 z-50 ${navBarOnScroll ? ' bg-slate-700 shadow-xl shadow-slate-800' : 'bg-gradient-to-b from-slate-900 via-slate-800/70 to-transparent'}`}>
      <div className="container mx-auto">
        <div className="px-4 flex items-center gap-5 justify-between">
          <NavBarMenu className={`fixed right-0 left-0 bottom-0 py-5 bg-slate-900 lg:bg-transparent lg:py-0 px-0 lg:static`} />
          <NavBarTitle children={`Playwatch`} className={`font-extrabold lg:mr-32 lg:ml-auto text-2xl text-slate-300`} />
          {/* <button className="text-white lg:hidden" onClick={() => setShowSearch(!showSearch)}>
            {!showSearch ? <FaSearch size={26} /> : <AiFillCloseCircle size={26} />}
          </button> */}
          <NavBarSearch
            className={`px-4 py-2 lg:mr-5 rounded-full ml-auto text-white hover:bg-gradient-to-r hover:text-white focus-within:bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 focus-within:text-white transition duration-300 ease-in-out `}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
