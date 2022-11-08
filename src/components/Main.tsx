import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import TopRated from "../models/TopRated";
import {
  getDiscoverMovies,
  getMovieBySearchTerm,
} from "../services/movieDBApiService";
import DropDownForm from "./DropDownForm";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
import TopRatedList from "./TopRatedMovies";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<TopRated[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm !== "") {
      getMovieBySearchTerm(searchTerm).then((res) => setMovies(res.results));
    } else {
      getDiscoverMovies().then((res) => {
        setMovies(res.results);
      });
    }
  }, [searchTerm]);

  return (
    <main className="Main">
      <SearchForm setTerm={setSearchTerm} />
      <DropDownForm />

      <ResultsList movies={movies} />
    </main>
  );
};

export default Main;
