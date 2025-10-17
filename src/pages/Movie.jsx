import React from "react";
import NavBar from "../components/NavBar";
import { movies } from "../data";
import { useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => String(m.id) === String(id));

  if (!movie) return (
    <main>
      <NavBar />
      <h1>Movie not found</h1>
    </main>
  );

  return (
    <main>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((g) => (
          <span key={g} style={{marginRight: "6px"}}>{g}</span>
        ))}
      </div>
    </main>
  );
}
