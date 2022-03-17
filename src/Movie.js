import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

// Movie
export function Movie({
    trailer,
  poster,
  name,
  summary,
  rating,
  rate,
  year,
  deleteButton,
  id,
}) {
  // Conditional styling
  const styles = {
    color: rate > 4 ? "red" : "blue",
  };

  // none ->block (Conditional styling)
  const [show, setShow] = useState(true);
  const history = useHistory();

  // const styl={
  // display:  show? "block" : "none"
  return (
    <Card
      id="poster"
      className="container-sm ,container-md,container-xl,container-lg,container,container-fluid"
    >
      {/* <iframe
        width="699"
        height="393"
        src={trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <img src={poster} className="img-fluid" />
      <CardContent>
        <div
          id="title"
          className="container-sm ,container-md,container-xl,container-lg,container,container-fluid"
        >
          <h1>
            <b>
              Movie<br></br>🎬{name}🎬
            </b>
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="toggle discription"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => history.push(`/movie/${id}`)}
              aria-label="toggle discription"
            >
              <InfoIcon />
            </IconButton>
          </h1>
          <h3>{rating}</h3>
          <h3 style={styles}> {rate}</h3>
          <h3>{year}</h3>

          {/* <h3 style={styl}>🍿🍿🍿<b>Summary</b>🍿🍿🍿<br></br>{summary}</h3> */}

          {/* conditional rendering */}
          {show ? <h3 className="movie-summary">{summary}</h3> : ""}
          <CardContent>
            <Counter /> {deleteButton}
          </CardContent>
        </div>
      </CardContent>

      {/* <ColorBox/> */}
    </Card>
  );
}
