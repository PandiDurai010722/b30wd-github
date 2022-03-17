import { Counter } from "./Counter";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function MovieDetails({ Movies }) {
  const { id } = useParams(); //extracting parameter from the URL
  console.log(id);
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
