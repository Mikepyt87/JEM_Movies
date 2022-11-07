import Movie from "../models/Movie";
import "./Results.css";

//2

interface Props {
  oneMovie: Movie;
}

//3
const Results = ({ oneMovie }: Props) => {
  return (
    <li className="Results">
      <h3>{oneMovie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        alt="movieImage"
      />
      <button className="watchList">Add to your Watchlist</button>
    </li>
  );
};

export default Results;
