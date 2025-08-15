import React from "react";
import { starWarsApi } from "../../service/movies.service";
import { Movie } from "@/types/movies";
import MovieCard from "./MovieCard";

export default async function Movies() {
  
  const getMovieId = (movieUrl: string) =>
    movieUrl.split("/").filter(Boolean).pop() || "0";

  try {
    const movies = await starWarsApi.getMovies();
    return (
      <div className="grid gap-4 md:grid-cols-3 mt-4">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.episode_id}
            title={movie.title}
            movieId={getMovieId(movie.url)}
          />
        ))}
      </div>
    );
  } catch (err) {
    return (
      <p className="text-red-500 text-center font-bold mt-8">
        No se pudieron cargar las películas. Intenta más tarde.
      </p>
    );
  }
}
