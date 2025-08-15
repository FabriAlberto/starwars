import { Movie } from "@/types/movies";
import React from "react";
import ClockIcon from "../common/icons/ClockIcon";
import PersonIcon from "../common/icons/PersonIcon";

interface MovieInfoProps {
  movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Opening</h3>
      <div className="text-gray-300 text-sm leading-relaxed space-y-4 whitespace-pre-line">
        {movie.opening_crawl
          .replace(/\r\n\r\n/g, "\n\n") // reemplazamos los pequeños saltos para que sea tal cual el diseño
          .replace(/\r\n/g, " ")}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-1 rounded-lg bg-[#FFFFFF14]">
            <ClockIcon className="w-5 h-5 text-white" />
          </div>
          <p className="text-white font-medium">{movie.release_date}</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-1 rounded-lg bg-[#FFFFFF14]">
            <PersonIcon className="w-5 h-5 text-white" />
          </div>
          <p className="text-white font-medium">{movie.director}</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-1 rounded-lg bg-[#FFFFFF14]">
            <PersonIcon className="w-5 h-5 text-white" />
          </div>
          <p className="text-white font-medium">{movie.producer}</p>
        </div>
      </div>
      <div className="w-full border-b border-[#28282A]" />
    </div>
  );
};

export default MovieInfo;
