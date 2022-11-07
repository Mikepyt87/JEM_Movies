import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import Movie from "../models/Movie";
import "./Results.css";

//2

interface Props {
  oneMovie: Movie;
}

//3
const Results = ({ oneMovie }: Props) => {
  const { addWatchList } = useContext(WatchListContext);
  return (
    <li className="Results">
      <h3>{oneMovie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        alt="movieImage"
      />
      <button
        onClick={() => {
          addWatchList(oneMovie);
        }}
      >
        Add to your Watchlist
      </button>
    </li>
  );
};

export default Results;
