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
    console.log(dropDownForm);
    criteria({ dropDownForm, voteAverage, runTime });
  };

  return (
    <form className="DropDownForm" onSubmit={handleSubmit}>
      <label htmlFor="Genre">Filter movies:</label>
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
      {/* <label htmlFor="votes">Average user rating</label> */}
      <select
        name="votes"
        id="votes"
        value={voteAverage}
        onChange={(e) => {
          setVoteAverage(e.target.value);
        }}
      >
        <option value="">...select a user rating</option>
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

      {/* <label htmlFor="length">Movie length</label> */}
      <select
        name="length"
        id="length"
        value={runTime}
        onChange={(e) => {
          setRunTime(e.target.value);
        }}
      >
        <option value="">...select a movie length</option>
        <option value="30">½ hour</option>
        <option value="60">1 hour</option>
        <option value="90">1 ½ hours</option>
        <option value="120">2 hours</option>
        <option value="150">2 ½ hours</option>
        <option value="180">3 hours</option>
        <option value="1000">3+ Hours</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default DropDownForm;
