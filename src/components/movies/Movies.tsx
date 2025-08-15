import React, { FC } from "react";
import { Movie } from "@/types/movies";
import MovieCard from "./MovieCard";

type Props = {
  movies: Movie[];
};
const Movies: FC<Props> = ({ movies }) => {
  const getMovieId = (movieUrl: string) =>
    movieUrl.split("/").filter(Boolean).pop() || "0";
  
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
};
export default Movies;
