import { Movie, MoviesResponse, Planet } from "@/types/movies";
import api from "./api.service";
import axios from "axios";

export const starWarsApi = {
  async getMovies(): Promise<MoviesResponse> {
    /* throw new Error('Error de prueba') */
    const { data } = await api.get("/films");
    return data;
  },
  async getMovieById(id: string): Promise<Movie> {
    const { data } = await api.get(`/films/${id}`);
    return data;
  },
  async getPlanetsData(urls: string[]): Promise<Planet[]> {
    try {
      const responses = await Promise.all(urls.map((url) => axios.get(url)));
      return responses.map((res) => res.data);
    } catch (error) {
      console.error("Error al obtener planetas:", error);
      throw error;
    }
  },
};
