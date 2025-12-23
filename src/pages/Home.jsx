import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";

function Home() {
  return (
    <div className=" min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
      </main>
      <About />
      <Skill />
    </div>
  );
}

export default Home;
