// app/movies/[id]/loading.tsx
export default function Loading() {
  return (
    <section className="h-full w-full flex flex-col items-center p-6">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1">
          <div className="w-32 h-10 bg-card-dark rounded-md animate-pulse mb-6"></div>

          <div className="h-8 w-48 bg-card-dark rounded animate-pulse mb-4"></div>

          <div className="h-4 w-24 bg-card-dark rounded animate-pulse mb-6"></div>


          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-card-dark rounded animate-pulse"
              ></div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-4 w-32 bg-card-dark rounded animate-pulse"></div>
            <div className="h-4 w-40 bg-card-dark rounded animate-pulse"></div>
            <div className="h-4 w-52 bg-card-dark rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="h-6 w-24 bg-card-dark rounded animate-pulse mb-4"></div>

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-card-dark rounded-lg p-4 flex flex-col gap-3 animate-pulse"
              >
                <div className="self-end h-8 w-20 bg-gray-700 rounded"></div>
                <div className="h-4 w-32 bg-gray-700 rounded"></div>
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
                <div className="h-4 w-28 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
