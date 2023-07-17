"use client";

import Categories from "./sections/Categories";
import Ranking from "./sections/Ranking";
import HomePage from "./sections/HomePage";
import Blog from "./sections/Blog";
import { useEffect } from "react";

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
