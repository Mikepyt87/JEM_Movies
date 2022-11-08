import { generateKey } from "crypto";
import { useEffect, useState } from "react";
import Genre from "../models/Genres";
import { getListOfGenre } from "../services/movieDBApiService";
import "./DropDownForm.css";

const DropDownForm = () => {
  const [dropDownForm, setDropDownForm] = useState("");
  const [listOfGenres, setListOfGenres] = useState<Genre[]>([]);
  useEffect(() => {
    getListOfGenre().then((res) => {
      setListOfGenres(res.genres);
    });
  }, []);
  return (
    <form className="DropDownForm">
      <label htmlFor="Genre">Choose a Genre</label>
      <select
        name="genre"
        id="genre"
        value={dropDownForm}
        onChange={(e) => {
          setDropDownForm(e.target.value);
        }}
      >
        <option value="">...select a genre</option>
        {listOfGenres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default DropDownForm;
