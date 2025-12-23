import { Bot, Code, Microchip } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grids-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer
            </h3>
            <p className="text-gray-500">
              Random Info Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Provident, assumenda. Molestiae quae facilis adipisci
              molestias?
            </p>
            <p className="text-gray-500">
              Random Info Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Provident, assumenda. Molestiae quae facilis adipisci
              molestias?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>Frontend Developer</h4>
                  <p>
                    I create responsive, user-friendly interfaces using modern
                    frontend technologies with a focus on clean design and
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>AI / ML Learner</h4>
                  <p>
                    Actively learning artificial intelligence and machine
                    learning, with a growing interest in building practical,
                    data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Microchip className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>Tech Enthusiast</h4>
                  <p>
                    Exploring full stack development by combining frontend
                    skills with Python-powered backend learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
