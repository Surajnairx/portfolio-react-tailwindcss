import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";

function Home() {
  return (
    <div className=" min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
    </div>
  );
}

export default Home;
