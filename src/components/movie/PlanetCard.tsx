import React from "react";
import ParticlesIcon from "../common/icons/ParticlesIcon";

interface Planet {
  id: string;
  name: string;
  population: string;
  diameter: string;
  rotation_period: string;
}

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <div className="bg-card-dark rounded-xl p-3 px-5 border border-[#34343A] relative">
      <div className="text-start mb-4">
        <h3 className="text-white font-semibold text-lg mb-3">
          {planet.name}
        </h3>
        
        <div className="space-y-2 text-[#A2A2A2] text-sm">
          <p className="text">{Number(planet.population).toLocaleString("es-ES")} población</p>
          <p className="text">{Number(planet.diameter).toLocaleString("es-ES")} km de diámetro</p>
          <p>Periodo de rotación: {planet.rotation_period} días</p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default PlanetCard;
