import AlertError from "@/components/common/AlertError";
import Movies from "@/components/movies/Movies";
import { starWarsApi } from "@/service/movies.service";

// Revalidar cada 24 horas
export const revalidate = 86400;
export default async function Home() {
  try {
    const movies = await starWarsApi.getMovies();
    return (
      <section className=" h-full w-full flex flex-col items-center">
        <p className="text-2xl font-[500] text-white mt-5">
          Escoge una película
        </p>
        <Movies movies={movies} />
      </section>
    );
  } catch (error) {
    console.error(error);
    return (
      <AlertError text=" No se pudieron cargar las películas. Intenta más tarde." />
    );
  }
}
