import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import { getMovieById } from "../services/movieDBApiService";
import "./Details.css";
import Results from "./Results";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [movieDetails, setMovieDetails] = useState<Movie | undefined>();
  console.log(id);

  useEffect(() => {
    getMovieById(+id!).then((res) => setMovieDetails(res));
  }, [id]);

  return (
    <div className="Details">
      {movieDetails ? <Results oneMovie={movieDetails} /> : <p>loading...</p>}
    </div>
  );
};

export default Details;
