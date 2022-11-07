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

  return (
    <WatchListContext.Provider value={{ watchList, addWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
