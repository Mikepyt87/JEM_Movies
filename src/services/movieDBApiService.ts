import axios from "axios";
import MovieResponse from "../models/DiscoverMovieResponse";
import DiscoverMovieResponse from "../models/DiscoverMovieResponse";

const apiKey: string = process.env.REACT_APP_JEMMOVIE_API_KEY || "";

export const getDiscoverMovies = (): Promise<DiscoverMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/discover/movie`, {
      // list all of the query params we are searching for in the params argument below
      params: { api_key: apiKey },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMovieBySearchTerm = (
  searchTerm: string
): Promise<MovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/search/movie?api_key=", {
      params: {
        api_key: apiKey,
        query: searchTerm,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
