import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.avif"

const Header = () => {
  const favMovies = useSelector((store) => store.favorite.movies);

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center p-2">
        <div>
            <img src={Logo} className="max-w-10 md:max-w-16"/>
          {/* <h2 className="p-2 m-2 font-semibold text-sm md:text-base">Star Wars</h2> */}
        </div>
        <ul className="flex justify-end md:flex md:items-center md:pb-0 space-x-4 text-sm md:text-base">
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/favorite">
              <button className="bg-green-400 rounded-lg px-2 ">
                Favorite({favMovies.length})
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Header;

