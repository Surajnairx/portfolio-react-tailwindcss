import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flec-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 bg-transparent/80">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Suraj{" "}
            </span>
            <span className=" opacity-0 animate-fade-in-delay-2">Nair</span>
          </h1>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold mt-3 opacity-0 animate-fade-in-delay-3">
            Frontend Developer transitioning into Full-Stack & AI/ML
          </p>
          <p className="text-gray-500 mt-2 opacity-0 animate-fade-in-delay-3">
            I craft intuitive user interfaces, build robust backend systems, and
            integrate AI to deliver scalable, real-world solutions.
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-delay-4 pt-2">
          <button className="cosmic-button">
            <a href="#projects">View Projects</a>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default Hero;
