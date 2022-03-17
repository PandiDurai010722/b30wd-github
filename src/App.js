import { Component, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardAction from "@mui/material/CardActions";
import { Msg, double } from "./Msg"; // 1. Named import & exports -latest
import { ColorBox } from "./ColorBox";
import { Addcolor } from "./Addcolor";
import DeleteIcon from "@mui/icons-material/Delete";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box } from "@mui/system";
import { TicTacToe } from "./TicTacToe";
import { Redirect } from "react-router-dom";
import { Welcome } from "./Welcome";
import { NotFound } from "./NotFound";
import { Movielist } from "./Movielist";
import { InitalMovies } from "./InitalMovies";
import { Counter } from "./Counter";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// 3.Default imports & exports
export default function App() {
  // const nam=["pandi","Aruna","Arunpandi"];

  // const truck = [
  //   {
  //     name: "pandi",
  //     img:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuM_Jrc-6O5Ir90QLxK2ydF9pH4GcjBtuqw&usqp=CAU"
  //   },
  //   {
  //     name: "durai",
  //     img:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGKCnnswy93bYFPnJBKrJKX6xVbYZeOkAPg&usqp=CAU"
  //   }
  // ];

  const [Movies, setMovies] = useState(InitalMovies);

 

  return (
    <div>
      {/* {nam.map((nam)=><Msg nam={nam}/>)} */}
      <ul>
        <li>
          <Link to="/">WELCOME MULTI APP</Link>
        </li>
        
        <li>
          <Link to="/movie">Movies</Link>
        </li>
        <li><Link to="/movie/add">ADDMovie</Link></li>
        <li>
          <Link to="/addcolor">ADDCOLER</Link>
        </li>
        <li>
          <Link to="/tic">Tic Game</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        {/* old path ->/flims  new path ->/movies */}
        <Route path="/flims">
          <Redirect to="/movie"></Redirect>
        </Route>

        <Route path="/movie/add"><AddMovie Movies={Movies} setMovies={setMovies} /></Route>

        <Route path="/movie/:id">
          <MovieDetails Movies={Movies} />
        </Route>

        {/* /movies/add */}
        <Route path="/movie">
          
          <Movielist Movies={Movies} setMovies={setMovies} />
        </Route>
        {/*( /:--> makes id a variable) */}

        

        <Route path="/addcolor">
          <Addcolor />
        </Route>

        <Route path="/tic">
          <TicTacToe />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}


function  AddMovie({Movies,setMovies}){
   const [poster, setposter] = useState("");
  const [name, setname] = useState("");
  const [Summary, setSummary] = useState("");
  const [Rating, setRating] = useState("");
  const [Rate, setRate] = useState("");
  const [Year, setYear] = useState("");
  const [trailer,settrailer] =useState("");
  return(
<div className="add-movie">
            
            <TextField
                label="trailer"
                variant="outlined"
                onChange={(event) => settrailer(event.target.value)}
              />
              <TextField
                label="poster"
                variant="outlined"
                onChange={(event) => setposter(event.target.value)}
              />
              <TextField
                label="name"
                variant="outlined"
                onChange={(event) => setname(event.target.value)}
              />
              <TextField
                label="Summary"
                variant="outlined"
                onChange={(event) => setSummary(event.target.value)}
              />
              <TextField
                label="Rating"
                variant="outlined"
                onChange={(event) => setRating(event.target.value)}
              />
              <TextField
                label="Rate"
                variant="outlined"
                onChange={(event) => setRate(event.target.value)}
              />
              <TextField
                label="Year"
                variant="outlined"
                onChange={(event) => setYear(event.target.value)}
              />
  
              {/*copy the movielist and add new movie to it  */}
  
              <Button
                variant="contained"
                onClick={() => {
                  const newMovie = {
                    trailer:trailer,
                    name: name,
                    poster: poster,
                    Summary: Summary,
                    Rate: Rate,
                    Rating: Rating,
                    Year: Year,
                    
                  };
                  setMovies([...Movies, newMovie]);
                }}
              >
                AddMovie
              </Button>
            </div>
  )
}



function MovieDetails({Movies}) {
  const {id} =useParams(); //extracting parameter from the URL
  console.log(id)
  const movie = Movies[id];
  return (

    <div
      id="poster"
      className="container-sm ,container-md,container-xl,container-lg,container,container-fluid"
    >
       
      <div
        id="title"
        className="container-sm ,container-md,container-xl,container-lg,container,container-fluid"
      >
        <iframe
          width="100%"
          height="393"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
       
        <div className="add-movie">
          <h1>
            <b>
              Movie<br></br>🎬{movie.name}🎬
            </b>
          </h1>
          <h3>{movie.Rating}</h3>
          <h3> {movie.Rate}</h3>
          <h3>{movie.Year}</h3>

          <h3>
            🍿🍿🍿<b>Summary</b>🍿🍿🍿<br></br>
            {movie.Summary}
          </h3>

          <Counter />
        </div>
      </div>
    </div>
  );
}

// navgate file ctrl + click which Component
