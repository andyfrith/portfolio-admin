import { Metadata } from "next";
import { AccoladesList } from "./list";

export const metadata: Metadata = {
  title: "Accolades",
};

export default function Accolades() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <AccoladesList />
    </main>
  );
}
