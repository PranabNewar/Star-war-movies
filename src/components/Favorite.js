import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Favorite = () => {
  const favoriteMovies = useSelector((store) => store.favorite.movies);

  return (
    <div className=" flex-wrap flex flex-row  justify-center">
      {favoriteMovies.map((movie) => {
        return <MovieCard movies={movie} key={movie.episode_id} />;
      })}
    </div>
  );
};
export default Favorite;
