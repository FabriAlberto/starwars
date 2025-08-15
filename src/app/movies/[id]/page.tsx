import React from "react";
import { starWarsApi } from "../../../service/movies.service";
import MovieInfo from "../../../components/movie/MovieInfo";
import MoviePlanets from "../../../components/movie/MoviePlanets";
import Link from "next/link";
import ArrowBackIcon from "@/components/common/icons/ArrowBackIcon";
import AlertError from "@/components/common/AlertError";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailPage({ params }: PageProps) {
  try {
    const { id } = await params;
    const movie = await starWarsApi.getMovieById(id);

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
          <div className="w-full md:w-6/12 pe-0 md:pe-3">
            <MovieInfo movie={movie} />
          </div>

          <div className="w-full md:w-6/12">
            <MoviePlanets planetsUrl={movie.planets} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <AlertError text=" No se pudo cargar la película." returnHome />;
  }
}
