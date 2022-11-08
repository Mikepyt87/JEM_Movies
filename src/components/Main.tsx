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
  const [dropDownForm, setDropDownForm] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [runTime, setRunTime] = useState("");
  useEffect(() => {
    if (searchTerm !== "") {
      getMovieBySearchTerm(searchTerm).then((res) => setMovies(res.results));
    } else {
      getDiscoverMovies(dropDownForm, voteAverage, runTime).then((res) => {
        setMovies(res.results);
      });
      console.log("hello");
    }
  }, [searchTerm, dropDownForm, voteAverage, runTime]);
  // --------------------------------------------------------------------- change any!!! --------------------
  const handleCriteria = (object: any) => {
    setDropDownForm(object.dropDownForm);
    setVoteAverage(object.voteAverage);
    setRunTime(object.runTime);
  };

  return (
    <main className="Main">
      <SearchForm setTerm={setSearchTerm} />
      <DropDownForm criteria={handleCriteria} />

      <ResultsList movies={movies} />
    </main>
  );
};

export default Main;
