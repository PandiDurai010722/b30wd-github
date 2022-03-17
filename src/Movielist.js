import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// movielist
export function Movielist({ Movies, setMovies }) {
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
            
            deleteButton={
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
          id={index} />
        ))}
      </div>
    </div>
  );
}
