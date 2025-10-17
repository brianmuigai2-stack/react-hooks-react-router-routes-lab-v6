import React from "react";
import NavBar from "../components/NavBar";
import { directors } from "../data";

export default function Directors() {
  return (
    <main>
      <NavBar />

      <h1>Directors Page</h1>

      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}
