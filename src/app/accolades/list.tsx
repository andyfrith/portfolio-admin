"use client";

import { useGetAccolades } from "../data/useGetAccolades";
export function AccoladesList() {
  const { isPending, error, data } = useGetAccolades();

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  if (isPending) {
    <p>...Loading</p>;
  }

  return (
    <main className="flex items-center justify-center md:h-screen">
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.summary}</li>
        ))}
      </ul>
    </main>
  );
}
