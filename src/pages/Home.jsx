import React from "react";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className=" min-h-screen bg-background text-foreground">
      <ThemeToggle />
    </div>
  );
}

export default Home;
