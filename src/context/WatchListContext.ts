import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchListContextModel {
  watchList: Movie[];
  addWatchList: (movie: Movie) => void;
  deleteFromWatchList: (id: number) => void;
  isOnWatchList: (id: number) => boolean;
}

const defaultValues: WatchListContextModel = {
  watchList: [],
  addWatchList: () => {},
  deleteFromWatchList: () => {},
  isOnWatchList: () => false,
};

const WatchListContext = createContext(defaultValues);

export default WatchListContext;
