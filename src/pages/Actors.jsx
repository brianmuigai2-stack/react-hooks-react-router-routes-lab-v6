import React from "react";
import NavBar from "../components/NavBar";
import { actors } from "../data";

export default function Actors() {
  return (
    <main>
      <NavBar />

      <h1>Actors Page</h1>

      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}
