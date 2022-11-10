import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import Movie from "../models/Movie";
import "./Results.css";

//2

interface Props {
  oneMovie: Movie;
}

//3
const Results = ({ oneMovie }: Props) => {
  const { addWatchList, deleteFromWatchList, isOnWatchList } =
    useContext(WatchListContext);
  const id: string | undefined = useParams().id;
  const totalMinutes = oneMovie.runtime;
  const hours = Math.floor(oneMovie.runtime! / 60);
  const minutes = totalMinutes! % 60;

  return (
    <li className="Results">
      <h3>{oneMovie.title}</h3>
      <Link to={`/details/${oneMovie.id}`}>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
          alt="movieImage"
        />
      </Link>
      {/* add extra stuff to details */}

      {id && <p className="overview">{oneMovie.overview}</p>}
      {id && <p className="runtime">{`${hours} hours ${minutes} minutes`}</p>}
      {isOnWatchList(oneMovie.id) ? (
        <button
          className="deleteWatchList"
          onClick={() => {
            deleteFromWatchList(oneMovie.id);
          }}
        >
          Remove from your Watchlist
        </button>
      ) : (
        <button
          className="addWatchList"
          onClick={() => {
            addWatchList(oneMovie);
          }}
        >
          Add to your Watchlist
        </button>
      )}
    </li>
  );
};

export default Results;
