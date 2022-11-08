import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import {
  getDiscoverMovies,
  getMovieBySearchTerm,
} from "../services/movieDBApiService";
import DropDownForm from "./DropDownForm";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
      Main works
      <SearchForm setTerm={setSearchTerm} />
      <DropDownForm />
      <ResultsList movies={movies} />
    </main>
  );
};

export default Main;
