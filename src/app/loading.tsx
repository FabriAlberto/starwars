export default function Loading() {
  return (
    <section className="h-full w-screen flex flex-col items-center">
      <p className="text-2xl font-[500] text-white mt-5">
        Cargando películas...
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-48 h-32 bg-card-dark rounded-lg animate-pulse rounded-xl p-6"
          ></div>
        ))}
      </div>
    </section>
  );
}
