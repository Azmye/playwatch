import { NavLink } from 'react-router-dom';

//Links Style
const activeStyle = 'border-b lg:border-0 lg:rounded-full lg:bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900';

//Icons
import { BiCameraMovie, BiHomeSmile } from 'react-icons/bi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';

const NavBarMenu = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex flex-row justify-evenly gap-3 text-white">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? activeStyle : undefined)} end>
          <li className="font-semibold flex items-center gap-1 py-1 px-2 rounded-full lg:hover:bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900">
            <BiHomeSmile size={22} /> <span className="hidden lg:block">Home</span>
          </li>
        </NavLink>
        <NavLink to={'/movie'} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <li className="font-semibold flex items-center gap-1 py-1 px-2 rounded-full lg:hover:bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900">
            <BiCameraMovie size={22} />
            <span className="hidden lg:block">Movies</span>
          </li>
        </NavLink>
        <NavLink to={'/tv'} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <li className="font-semibold flex items-center gap-1 py-1 px-2 rounded-full lg:hover:bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900">
            <HiOutlineRectangleStack size={22} />
            <span className="hidden lg:block">TV Shows</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBarMenu;
