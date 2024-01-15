import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name:"favorite",
    initialState:{
        movies: []
    },
    reducers:{
        addMovie : (state,action)=>{
            state.movies.push(action.payload)
        },
        removeMovie: (state, action)=>{
           state.movies = state.movies.filter(res=>res.episode_id !== action.payload.episode_id)
        },
        clearFav:(state,action)=>{
            state.movies.length = 0;

        },
    }
});
export const {addMovie,removeMovie,clearFav}= favSlice.actions;
export default favSlice.reducer;