import React from "react";
import { starWarsApi } from "../../../service/movies.service";
import MovieInfo from "../../../components/movie/MovieInfo";
import MoviePlanets from "../../../components/movie/MoviePlanets";
import Link from "next/link";
import ArrowBackIcon from "@/components/common/icons/ArrowBackIcon";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const movie = await starWarsApi.getMovieById(params.id);

    return (
      <div className="bg-primary-dark px-2 sm:px-[15px] md:px-[100px] lg:px-[150px] xl:px-[160px]">
        <div className="flex items-center mb-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowBackIcon />
          </Link>
          <h1 className="text-3xl font-medium text-white ml-4">
            {movie.title}
          </h1>
        </div>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-6/12 pe-3">
            <MovieInfo movie={movie} />
          </div>

          <div className="w-full md:w-6/12">
            <MoviePlanets planetsUrl={movie.planets} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>No se pudo cargar la película</p>
        </div>
      </div>
    );
  }
}
