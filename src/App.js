import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardAction from "@mui/material/CardActions";
import { Msg, double } from "./Msg"; // 1. Named import & exports -latest
import { ColorBox } from "./ColorBox";
import { Addcolor } from "./Addcolor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Counter } from "./Counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Box } from "@mui/system";

// console.log(double(4));

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

  const InitalMovies = [
    {
      poster: "https://wallpapercave.com/dwp2x/tq3jwQg.jpg",
      name: "The fast and The furious",
      Summary:
        "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
      Rating: "⭐⭐⭐⭐",
      Rate: 4,
      Year: 2001,
    },
    {
      poster: "https://wallpapercave.com/dwp2x/yN6gKa5.jpg",
      name: "2 Fast & 2 Furious",
      Summary:
        "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.",
      Rating: "⭐⭐⭐⭐⭐",
      Rate: 5,
      Year: 2003,
    },
    {
      poster: "https://wallpapercave.com/wp/wp1825855.jpg",
      name: "The Fast and the Furious: Tokyo Drift",
      Summary:
        "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
      Rating: "⭐⭐⭐⭐",
      Rate: 4,
      Year: 2006,
    },
    {
      poster: "https://wallpapercave.com/dwp2x/ok4EoNj.jpg",
      name: "The Fast & Furious 4",
      Summary:
        "Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
      Rating: "⭐⭐⭐",
      Year: 2009,
    },
    {
      poster: "https://wallpapercave.com/wp/wp1983461.jpg",
      name: "Fast Five",
      Summary:
        "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
      Rating: "⭐⭐⭐⭐⭐",
      Rate: 5,
      Year: 2011,
    },
    {
      poster: "https://wallpapercave.com/dwp2x/wp9832983.jpg",
      name: "Fast & Furious 6",
      Summary:
        "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
      Rating: "⭐⭐⭐⭐",
      Rate: 4,
      Year: 2013,
    },
    {
      poster: "https://wallpapercave.com/dwp2x/wp1830970.jpg",
      name: "Furious 7",
      Summary:
        "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
      Rating: "⭐⭐⭐⭐",
      Rate: 4,
      Year: 2015,
    },
    {
      poster: "https://wallpapercave.com/dwp2x/wp8243875.jpg",
      name: "fast and furious 8",
      Summary:
        "In the film, Dominic Toretto has settled down with his wife Letty Ortiz, until cyberterrorist Cipher coerces him into working for her and turns him against his team, forcing them to find Dom and take down Cipher.",
      Rating: "⭐⭐⭐⭐⭐",
      Rate: 5,
      Year: 2017,
    },
    {
      poster: "https://i.ytimg.com/vi/fEE4RO-_jug/maxresdefault.jpg",
      name: "F9",
      Summary:
        "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
      Rating: "⭐⭐⭐⭐",
      Rate: 4,
      Year: 2021,
    },
  ];

  const [Movies, setMovies] = useState(InitalMovies);

  const [poster, setposter] = useState("");
  const [name, setname] = useState("");
  const [Summary, setSummary] = useState("");
  const [Rating, setRating] = useState("");
  const [Rate, setRate] = useState("");
  const [Year, setYear] = useState("");

  return (
    <div>
      {/* {nam.map((nam)=><Msg nam={nam}/>)} */}
      <ul>
        <li>
          <Link to="/wel">WELCOME MULTI APP</Link>
        </li>
        <li>
          <Link to="/addmovie">ADDMOVIE</Link>
        </li>
        <li>
          <Link to="/addcolor">ADDCOLER</Link>
        </li>
        <li>
          <Link to="/tic">Tic Game</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/wel">
          <Welcome />
        </Route>
        <Route path="/addmovie">
          <div className="add-movie">
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

          <div id="App">
            {Movies.map(
              ({ name, poster, Rating, Rate, Summary, Year }, index) => (
                <Movie
                  key={index}
                  poster={poster}
                  name={name}
                  summary={Summary}
                  rating={Rating}
                  rate={Rate}
                  year={Year}
                />
              )
            )}
          </div>
        </Route>
        <Route path="/addcolor">
          <Addcolor />
        </Route>
        <Route path="/tic">
          <TicTacToe />
        </Route>
      </Switch>
    </div>
  );
}

// Movie
function Movie({ poster, name, summary, rating, rate, year }) {
  // Conditional styling
  const styles = {
    color: rate > 4 ? "red" : "blue",
  };

  // none ->block (Conditional styling)

  const [show, setShow] = useState(true);

  // const styl={
  // display:  show? "block" : "none"

  return (
    <Card
      id="poster"
      className="container-sm ,container-md,container-xl,container-lg,container,container-fluid"
    >
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
              // conditional rendering
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h1>
          <h3>{rating}</h3>
          <h3 style={styles}> {rate}</h3>
          <h3>{year}</h3>

          {/* <h3 style={styl}>🍿🍿🍿<b>Summary</b>🍿🍿🍿<br></br>{summary}</h3> */}

          {/* conditional rendering */}
          {show ? <h3 className="movie-summary">{summary}</h3> : ""}
          <CardContent>
            <Counter />
          </CardContent>
        </div>
      </CardContent>

      {/* <ColorBox/> */}
    </Card>
  );
}

//WELCOME TO MULTI APP

function Welcome() {
  return (
    <div>
      <h1>🙌🙌🙌🙌🙌WELCOME🙌🙌🙌🙌🙌</h1>
    </div>
  );
}

// loop -> map
// parent Component ->Child Component (Data has to be passed)->props
function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // console.log(a, b, c);
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const [isXturn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    {
      /*copy the board and replace with "X" in the clicked GameBox  */
    }
    // Update only untouched boxes & until no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      //  console.log(boardCopy,index);
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }

    // console.log(index);
  };
  const { width, height } = useWindowSize()

  return (
    <div className="full-game">
      {winner?<Confetti
      width={width}
      height={height}
      gravity={0.01}

    />:""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
        {/* <GameBox/> */}
      </div>
      {winner ? <h1>Winner is :{winner}</h1> : ""}
    </div>
  );
}

// {val}  -> Object destructuring
function GameBox({ val, onPlayerClick }) {
  // const val = "X";
  // const [val, setVal] = useState(null); //Changing val requires hook
  const styles = {
    color: val === "X" ? "red" : "green", //conditional styling
  };
  return (
    <div
      // onClick={() => setVal(val === "X" ? "O" : "X")}
      onClick={() => onPlayerClick()}
      className="game-box"
      style={styles}
    >
      {val}
    </div>
  ); //{}->tempate syntax
}

// // {val}  -> Object destructuring
// function GameBox({val}) {
//   // const val = "X";
//   // const [val, setVal] = useState();
//   const styles = {
//     color: val === "X" ? "red" : "green", //conditional styling
//   };
//   return (
//     <div className="game-box" style={styles}>
//       {val}
//     </div>
//   ); //{}->tempate syntax
// }
// Multi page-advantage
// 1.performance
// 2.Ease of access - Organized
// 3.Sharing

//  SPA
// 1.No refresh
// 2.Smoth experience

//  React router dom
// Conditional rendering

// 04/02/22
// Today's topic
// Basic routing & Recap Session

//Task 
// 1.Draw condition
// 2.X turn /O turn
// 3.Whom to start the game with X or O
// 4.Restart