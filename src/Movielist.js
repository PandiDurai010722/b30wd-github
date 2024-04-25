import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

// movielist
export function Movielist({ Movies, setMovies }) {
    const history=useHistory();
  return (
    <div>
      <div id="App">
        {Movies.map(({ trailer,name, poster, Rating, Rate, Summary, Year }, index) => (
          <Movie
            key={index}
            trailer={trailer}
            poster={poster}
            name={name}
            summary={Summary}
            rating={Rating}
            rate={Rate}
            year={Year}
            
            DeleteButton={
              <IconButton aria-label="delete">
                <DeleteIcon
                  onClick={() => {
                    console.log(index);
                    const copyMovies = [...Movies];
                    copyMovies.splice(index, 1);
                    setMovies(copyMovies);
                  }} aria-label="delete"
                  color="error"
                />
              </IconButton>
            }

            EditButton={
                <IconButton aria-label="Edit">
                  <EditIcon
                    onClick={() => {
                        history.push(`/movie/edit/${index}`)
                    }} aria-label="edit"
                    color="secondary"
                  />
                </IconButton>
              }

            
          id={index} />
        ))}
      </div>
    </div>
  );
}
