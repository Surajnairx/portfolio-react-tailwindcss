import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className=" min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
    </div>
  );
}

export default Home;
