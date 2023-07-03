"use client";

import Categories from "./sections/Categories";
import Ranking from "./sections/Ranking";
import HomePage from "./sections/HomePage";
import Blog from "./sections/Blog";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <Categories />
      <Ranking />
      <Blog />
    </main>
  );
}
