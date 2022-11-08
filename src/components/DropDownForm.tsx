import { FormEvent, useEffect, useState } from "react";
import Genre from "../models/Genres";
import { getListOfGenre } from "../services/movieDBApiService";
import "./DropDownForm.css";

interface Props {
  criteria: (object: any) => void;
}

const DropDownForm = ({ criteria }: Props) => {
  const [listOfGenres, setListOfGenres] = useState<Genre[]>([]);
  const [dropDownForm, setDropDownForm] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [runTime, setRunTime] = useState("");
  useEffect(() => {
    getListOfGenre().then((res) => {
      setListOfGenres(res.genres);
    });
  }, []);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    criteria({ dropDownForm, voteAverage, runTime });
  };

  return (
    <form className="DropDownForm" onSubmit={handleSubmit}>
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
      <label htmlFor="votes">Average user rating</label>
      <select
        name="votes"
        id="votes"
        value={voteAverage}
        onChange={(e) => {
          setVoteAverage(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <label htmlFor="length">Average user rating</label>
      <select
        name="length"
        id="length"
        value={runTime}
        onChange={(e) => {
          setRunTime(e.target.value);
        }}
      >
        <option value="60">1 Hour</option>
        <option value="90">1.5 Hours</option>
        <option value="120">2 Hours</option>
        <option value="150">2.5 Hours</option>
        <option value="180">3 Hours</option>
        <option value="1000">3+ Hours</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default DropDownForm;
