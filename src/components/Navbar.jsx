import React, { useEffect, useState } from "react";
import { href } from "react-router-dom";
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300  ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadown-xs"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10 ">
            <span className="text-glow hover:text-glow text-foreground">
              Suraj.dev {""}
            </span>
          </span>
        </a>
        {/*Desktop Version*/}
        <div className="hidden md:flex space-x-8 backdrop-blur-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/*Mobile Version*/}
    </nav>
  );
}

export default Navbar;
