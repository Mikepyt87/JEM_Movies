import { useContext } from "react";
import WatchListContext from "../context/WatchListContext";
import Results from "./Results";
import "./WatchList.css";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <ul className="WatchList">
      {watchList.map((item) => (
        <Results key={item.id} oneMovie={item} />
      ))}
    </ul>
  );
};

export default WatchList;
