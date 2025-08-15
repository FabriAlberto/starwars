import React, { FC } from "react";
import ParticlesIcon from "../common/icons/ParticlesIcon";
import Link from "next/link";

type Props = {
  title: string;
  movieId: string;
};

const MovieCard: FC<Props> = ({ title, movieId }) => {
  return (
    <Link href={`/movies/${movieId}`}>
      <div className="group bg-card-dark rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] border border-[#34343A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Icono del sistema solar */}
        <div className="mb-4 relative">
          <ParticlesIcon className="w-12 h-12 text-gray-400 transition-transform duration-500 ease-in-out group-hover:rotate-180" />
        </div>

        {/* Título de la película */}
        <h3 className="text-gray-300 text-lg font-medium text-center leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
