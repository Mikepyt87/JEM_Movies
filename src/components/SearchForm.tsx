import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setTerm: (searchInput: string) => void;
}

const SearchForm = ({ setTerm }: Props) => {
  const [searchMovie, setSearchMovie] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTerm(searchMovie);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="searchTerm">Search Movies</label>
      <div className="input-button">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
