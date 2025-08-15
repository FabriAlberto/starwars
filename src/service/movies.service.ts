import { Movie, MoviesResponse } from "@/types/movies";
import api from "./api.service";

export const starWarsApi = {
  async getMovies() : Promise<MoviesResponse> {
    /* throw new Error('Error de prueba') */
    const { data } = await api.get("/films");
    return data;
  },
  async getMovieById(id: string): Promise<Movie> {
    /* throw new Error('Error de prueba') */
    const { data } = await api.get(`/films/${id}`);
    return data;
  },
};
