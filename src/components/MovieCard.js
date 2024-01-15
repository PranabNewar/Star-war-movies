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
      
      <div className="m-10 border  min-h-80 max-h-80 border-slate-100 min-w-64 max-w-56 p-4">
        <img className="w-full mt-px " src={StarWarImg} alt="movie_pic" />
        <div className="mt-4 ">
          <h3 className="font-semibold ">{title}</h3>
          <h5 className="text-sm">Director : {director}</h5>
          <h5  className="text-sm">Producer :  {producer}</h5>
        </div>
        <div className="mt-8 flex justify-end">
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
              <img src={Favorited} alt="favourite" className="max-w-5 " />
            ) : (
              <img src={Favourite} alt="favourite" className="max-w-5 " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
