"use client";

import { ModeToggle } from "./mode-toggle";
import { Navigation } from "./navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-7 py-4">
      <Navigation />
      <ModeToggle />
    </header>
  );
}
