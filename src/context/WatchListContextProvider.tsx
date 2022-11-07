import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchListContext from "./WatchListContext";

interface Props {
  children: ReactNode;
}

const WatchListContextProvider = ({ children }: Props) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);
  console.log(watchList);

  const addWatchList = (movie: Movie): void => {
    setWatchList((prev) => [...prev, movie]);
  };

  const deleteFromWatchList = (id: number): void => {
    setWatchList((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isOnWatchList = (id: number): boolean => {
    return watchList.some((watch) => watch.id === id);
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addWatchList, deleteFromWatchList, isOnWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
