import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  //in oreder to dispatch action we fist need to unclude this
  // and when we get the response from the API reques
  // we just need to pass that to the dispatch function
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    // console.log(APIKey);

    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("The Error", error);
        });
      dispatch(addMovies(response.data));
    };

    fetchMovie();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
