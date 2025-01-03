export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:p-20 font-[family-name:var(--font-poppins-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="hero w-[450px] text-center">
          <h1>Portfolio Admin</h1>
          <p>
            This frontend application is used for administration of the content
            presented in the portfolio website for{" "}
            <span className="text-white">Andy Frith</span>. The application is
            engineered with{" "}
            <span className="text-white">
              Next.js 15, React v19 and TanStack Query v5
            </span>
            . The API service, portolio-api (built with the{" "}
            <span className="text-white">Hono</span> Javascript framework)
            provides an interface to a{" "}
            <span className="text-white">PostgreSQL</span> database.
          </p>
        </div>
      </main>
    </div>
  );
}
