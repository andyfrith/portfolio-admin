"use client";

export default function Hero() {
  return (
    <div className="card w-[450px] text-center">
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
        <span className="text-white">Hono</span> Javascript framework) provides
        an interface to a <span className="text-white">PostgreSQL</span>{" "}
        database.
      </p>
    </div>
  );
}
