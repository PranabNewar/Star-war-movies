import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const favMovies = useSelector((store) => store.favorite.movies);
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <h2 className="p-2 m-2 font-semibold sm:hidden ">Star Wars Movies</h2>
        </div>
        <ul className="flex justify-end ">
          <Link to="/">
            {" "}
            <li className="p-2 m-2">Home</li>{" "}
          </Link>
          <li className="p-2 m-2">
            <Link to="/favorite">
              {" "}
              <button className="bg-green-400 rounded-lg px-2">
                {" "}
                Favorite({favMovies.length})
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <hr></hr>
    </div>
  );
};
export default Header;
