// src/pages/Home.jsx
import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1>Home Page</h1>
      <section className="movies-list">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </section>
    </main>
  );
}
