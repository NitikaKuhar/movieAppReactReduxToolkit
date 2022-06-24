import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: []
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducer: {
    //add action inside reducer
    addMovies: (state, { payload }) => {
      state.movies = payload;
      /*previously we used to do in this way to update the state
      {..state, payload}
      but with toolkit we dont need to do that
      internal lib IMMER in toolkit - which takes the state and we 
      can directly update the property we want to update
      */
    }
  },
  extraReducers: {}
});
export const { addMovies } = movieSlice.actions;
//to get the values from store to be used in the application
// we can do it using this way
//state.<slicename>.<property we want to export>
export const getAllMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
