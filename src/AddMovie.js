import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function AddMovie({ Movies, setMovies }) {
  const [poster, setposter] = useState("");
  const [name, setname] = useState("");
  const [Summary, setSummary] = useState("");
  const [Rating, setRating] = useState("");
  const [Rate, setRate] = useState("");
  const [Year, setYear] = useState("");
  const [trailer, settrailer] = useState("");
  const history = useHistory();
  return (
    <div className="add-movie">

      <TextField
        label="trailer"
        variant="outlined"
        onChange={(event) => settrailer(event.target.value)} />
      <TextField
        label="poster"
        variant="outlined"
        onChange={(event) => setposter(event.target.value)} />
      <TextField
        label="name"
        variant="outlined"
        onChange={(event) => setname(event.target.value)} />
      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        label="Rate"
        variant="outlined"
        onChange={(event) => setRate(event.target.value)} />
      <TextField
        label="Year"
        variant="outlined"
        onChange={(event) => setYear(event.target.value)} />

      {/*copy the movielist and add new movie to it  */}

      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            trailer: trailer,
            name: name,
            poster: poster,
            Summary: Summary,
            Rate: Rate,
            Rating: Rating,
            Year: Year,
          };
          setMovies([...Movies, newMovie]);
          history.push("/movie")
        }}
      >
        AddMovie
      </Button>
    </div>
  );
}
