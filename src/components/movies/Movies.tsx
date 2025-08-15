import React from "react";
import { starWarsApi } from "../../service/movies.service";
import { Movie } from "@/types/movies";
import MovieCard from "./MovieCard";
import AlertError from "../common/AlertError";

export default async function Movies() {
  const getMovieId = (movieUrl: string) =>
    movieUrl.split("/").filter(Boolean).pop() || "0";

  try {
    const movies = await starWarsApi.getMovies();
    return (
      <div className="grid grid-cols-2  md:grid-cols-3 mt-4">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={`movie-${movie.episode_id}`}
            title={movie.title}
            movieId={getMovieId(movie.url)}
          />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err)
    return (
      <AlertError text=" No se pudieron cargar las películas. Intenta más tarde." />
    );
  }
}
