"use client";

import Categories from "./sections/Categories";
import Ranking from "./sections/Ranking";
import HomePage from "./sections/HomePage";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <Categories />
      <Ranking />
      <Blog />
      <Footer />
    </main>
  );
}
