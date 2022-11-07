import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getDiscoverMovies } from "../services/movieDBApiService";
import Results from "./Results";
import "./ResultsList.css";
import SearchForm from "./SearchForm";

const ResultsList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getDiscoverMovies().then((res) => setMovies(res.results));
  }, []);

  return (
    <div className="ResultsList">
      <SearchForm />
      <ul>
        {movies.map((item) => (
          //1
          <Results key={item.id} oneMovie={item} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
