import React from "react";
import { starWarsApi } from "../../service/movies.service";
import PlanetCard from "./PlanetCard";

interface MoviePlanetsProps {
  planetsUrl: string[];
}

const MoviePlanets: React.FC<MoviePlanetsProps> = async ({ planetsUrl }) => {
  try {
    const planets = await starWarsApi.getPlanetsData(planetsUrl);
    return (
      <div className="space-y-6 ml-3">
        <h2 className="text-xl font-semibold text-white mb-6">Planets</h2>
        <div className="space-y-4">
          {planets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Planetas</h2>
        <div className="text-gray-400 text-center py-8">
          No se pudieron cargar los planetas.
        </div>
      </div>
    );
  }
};

export default MoviePlanets;
