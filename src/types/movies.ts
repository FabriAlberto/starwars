export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; 
  characters: string[]; 
  planets: string[];    
  starships: string[];  
  vehicles: string[];   
  species: string[];    
  created: string;      
  edited: string;       
  url: string;
}

export type MoviesResponse = Movie[];
export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string; // ISO date string
  edited: string;  // ISO date string
  url: string;
};