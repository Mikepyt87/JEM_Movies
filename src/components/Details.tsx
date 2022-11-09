import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import { getDiscoverMovies, getMovieById } from "../services/movieDBApiService";
import "./Details.css";

const Details = () => {
  const id: number | undefined = useParams().id;
  const [movieDetails, setMovieDetails] = useState<Movie>();
  console.log(id);

  useEffect(() => {
    getMovieById(id).then((res) => setMovieDetails(res.data));
  }, [id]);

  return <div className="Details">Details works</div>;
};

export default Details;
