import Movies from "@/components/movies/Movies";

export default function Home() {
  return (
    <section className=" h-full w-screen flex flex-col items-center">
      <p className="text-2xl font-[500] text-white mt-5">Escoge una película</p>
      <Movies />
    </section>
  );
}
