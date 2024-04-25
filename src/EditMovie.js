import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export function EditMovie({ Movies, setMovies }) {
  const { id } = useParams(); //extracting parameter from the URL
  const movie = Movies[id];
  console.log(movie)
  const [poster, setposter] = useState(movie.poster);
  const [name, setname] = useState(movie.name);
  const [Summary, setSummary] = useState(movie.Summary);
  const [Rating, setRating] = useState(movie.Rating);
  const [Rate, setRate] = useState(movie.Rate);
  const [Year, setYear] = useState(movie.Year);
  const [trailer, settrailer] = useState(movie.trailer);
  const history = useHistory();
  return (
    <div className="add-movie">
      <TextField
        value={trailer}
        label="trailer"
        variant="outlined"
        onChange={(event) => settrailer(event.target.value)}
      />
      <TextField
        value={poster}
        label="poster"
        variant="outlined"
        onChange={(event) => setposter(event.target.value)}
      />
      <TextField
        value={name}
        label="name"
        variant="outlined"
        onChange={(event) => setname(event.target.value)}
      />
      <TextField
        value={Summary}
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={Rating}
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={Rate}
        label="Rate"
        variant="outlined"
        onChange={(event) => setRate(event.target.value)}
      />
      <TextField
        value={Year}
        label="Year"
        variant="outlined"
        onChange={(event) => setYear(event.target.value)}
      />

      {/*copy the movielist and add new movie to it  */}

      <Button
        variant="contained"
        onClick={() => {
          const UpdateMovie = {
            trailer: trailer,
            name: name,
            poster: poster,
            Summary: Summary,
            Rate: Rate,
            Rating: Rating,
            Year: Year,
          };

           const copy=[...Movies]
           copy[id]=UpdateMovie; 
           setMovies(copy);
         history.push("/movie");
        }}
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
