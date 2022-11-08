import { useEffect, useState } from "react";
import TopRated from "../models/TopRated";
import { getTopRated } from "../services/movieDBApiService";
import "./TopRatedList.css";
import TopRatedMovies from "./TopRatedMovies";

const TopRatedList = () => {
  const [topRated, setTopRated] = useState<TopRated[]>([]);
  useEffect(() => {
    getTopRated().then((res) => {
      setTopRated(res.results);
    });
  }, []);

  return (
    <div className="TopRatedList">
      <ul>
        {topRated.map((item) => (
          <TopRatedMovies key={item.id} topRated={item} />
        ))}
      </ul>
    </div>
  );
};

export default TopRatedList;
