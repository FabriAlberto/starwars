import React from "react";
import { Planet } from "@/types/movies";


interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <article className="bg-card-dark rounded-xl p-3 px-5 border border-[#34343A] relative">
      <section className="text-start mb-4">
        <h3 className="text-white font-semibold text-lg mb-3">{planet.name}</h3>

        <div className="space-y-2 text-[#A2A2A2] text-sm">
          <p className="text">
            {Number(planet.population).toLocaleString("es-ES")} población
          </p>
          <p className="text">
            {Number(planet.diameter).toLocaleString("es-ES")} km de diámetro
          </p>
          <p>Periodo de rotación: {planet.rotation_period} días</p>
        </div>
      </section>

      <section className="absolute top-4 right-4">
        <button className="bg-primary-button border-none cursor-pointer hover:bg-primary-button-hv text-white px-3 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200">
          Ver más
        </button>
      </section>
    </article>
  );
};

export default PlanetCard;
