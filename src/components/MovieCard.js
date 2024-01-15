import Favourite from "../assets/favorite.svg";
import Favorited from "../assets/favorite-1.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../utils/favSlice";
import StarWarImg from "../assets/images/star-wars-movies-image.webp";
const MovieCard = ({ movies }) => {
  const [isFavorite, setIsfavorite] = useState();
  const { title, director, producer, episode_id } = movies;
  const dispatch = useDispatch();
  useEffect(() => {
    const savedState = localStorage.getItem(`favorite_${episode_id}`);

    if (savedState) {
      setIsfavorite(JSON.parse(savedState));
    }
  }, [episode_id]);
  return (
    <div>
      <div className="m-10 border min-h-80 max-h-60 border-slate-200 min-w-64 max-w-56 p-4">
        <img className="w-full mt-px " src={StarWarImg} alt="movie_pic" />
        <div className="mt-4 ">
          <h4 className="font-medium">Name: {title}</h4>
          <h3>Director: {director}</h3>
          <h4>Producer: {producer}</h4>
        </div>
        <div className="mt-2">
          <button
            onClick={() => {
              //dispatch action

              if (!isFavorite) {
                setIsfavorite(true);
                dispatch(addMovie(movies));
                localStorage.setItem(
                  `favorite_${episode_id}`,
                  JSON.stringify(true)
                );
              } else {
                setIsfavorite(false);
                dispatch(removeMovie(movies));
                localStorage.setItem(
                  `favorite_${episode_id}`,
                  JSON.stringify(false)
                );
              }
            }}
          >
            {isFavorite ? (
              <img src={Favorited} alt="favourite" className="max-w-4 " />
            ) : (
              <img src={Favourite} alt="favourite" className="max-w-4 " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
