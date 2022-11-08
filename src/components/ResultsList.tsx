import Movie from "../models/Movie";
import Results from "./Results";
import "./ResultsList.css";

interface Props {
  movies: Movie[];
}

const ResultsList = ({ movies }: Props) => {
  return (
    <div className="ResultsList">
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
