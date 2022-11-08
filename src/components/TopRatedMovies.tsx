import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import TopRated from "../models/TopRated";
import "./TopRatedMovies.css";

interface Props {
  topRated: TopRated;
}

const TopRatedMovies = ({ topRated }: Props) => {
  const { addWatchList, deleteFromWatchList, isOnWatchList } =
    useContext(WatchListContext);
  return (
    <li className="TopRated">
      <h3>{topRated.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${topRated.poster_path}`}
        alt="movieImage"
      />
      <p>{topRated.vote_average}</p>
      {isOnWatchList(topRated.id) ? (
        <button
          className="deleteWatchList"
          onClick={() => {
            deleteFromWatchList(topRated.id);
          }}
        >
          Remove from your Watchlist
        </button>
      ) : (
        <button
          className="addWatchList"
          onClick={() => {
            addWatchList(topRated);
          }}
        >
          Add to your Watchlist
        </button>
      )}
    </li>
  );
};

export default TopRatedMovies;
