import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios"
import Shimmer from "./Shimmer"
import { MOVIE_API } from "../utils/constant"

const Body=()=> {
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const data = await axios.get(MOVIE_API);
        setMovieList(data?.data?.results)
    
    }
   console.log(movieList,"movieList")
   console.log(movieList?.length === 0,"movieList?.length === 0")
    
    return  movieList?.length === 0 ? ( <Shimmer/> ) :(
    
    <div className=" flex-wrap flex flex-row  justify-center" >
      
        {movieList?.map((movie)=>{
          return  <MovieCard movies={movie} key={movie.episode_id} />
        })}
        
        

    </div>
  )
}
export default Body