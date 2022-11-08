import axios from "axios";
import MovieResponse from "../models/DiscoverMovieResponse";
import DiscoverMovieResponse from "../models/DiscoverMovieResponse";
import Genre from "../models/Genres";
import { GenresResponse } from "../models/GenresResponse";
import SingleMovieResponse from "../models/SingleMovieResponse";
import TopRatedResponse from "../models/TopRatedResponse";

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
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: apiKey,
        query: searchTerm,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

// export const getMoviesByGenre = (
//   genre: number
// ): Promise<SingleMovieResponse> => {
//   return axios
//     .get(, {
//       params: {
//         api_key: apiKey,
//       },
//     })
//     .then((res) => res.data)
//     .catch((error) => console.log(error));
// };

export const getListOfGenre = (): Promise<GenresResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getTopRated = (): Promise<TopRatedResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
