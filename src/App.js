import { Component, useState } from "react";
import "./App.css";
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
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
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



