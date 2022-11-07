import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchListContextModel {
  watchList: Movie[];
  addWatchList: (movie: Movie) => void;
}

const defaultValues: WatchListContextModel = {
  watchList: [],
  addWatchList: () => {},
};

const WatchListContext = createContext(defaultValues);

export default WatchListContext;
