import { ExternalLink, GithubIcon } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Stop the Timer",
//     description:
//       "A responsive web application that challenges users to stop a countdown timer before it expires, demonstrating real-time state management and user interaction.",
//     image: "/projects/Counter.png",
//     tags: ["React", "TailwindCSS"],
//     demo: "#",
//     github: "#",
//   },
//   {
//     id: 2,
//     title: "CryptoRin",
//     description:
//       "A sleek cryptocurrency tracking platform delivering real-time prices, market analytics, and interactive charts for informed decisions.",
//     image: "/projects/CryptoRin.png",
//     tags: ["React", "TailwindCSS", "CoinGekko API"],
//     demo: "#",
//     github: "#",
//   },
//   {
//     id: 3,
//     title: "Manage Landing Page",
//     description:
//       "Developed a pixel-perfect, responsive “Manage” landing page from a Frontend Mentor challenge, focusing on layout accuracy, accessibility, and modern CSS practices.",
//     image: "/projects/LandingPage.png",
//     tags: ["React", "TailwindCSS"],
//     demo: "#",
//     github: "#",
//   },
//   {
//     id: 4,
//     title: "Atlas Escapes",
//     description:
//       "A location-aware travel discovery app that helps users explore and save iconic destinations worldwide—such as Himalayan peaks, Caribbean beaches, and the Northern Lights—while recommending nearby places using real-time location data.",
//     image: "/projects/PlacePicker.png",
//     tags: ["React", "TailwindCSS"],
//     demo: "#",
//     github: "#",
//   },
// ];

const projects = [
  {
    id: 1,
    title: "Stop the Timer",
    description:
      "An interactive countdown game where users must stop the timer before it expires.",
    image: "/projects/Counter.png",
    tags: ["React", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "CryptoRin",
    description:
      "A cryptocurrency tracker providing real-time prices, market data, and interactive charts.",
    image: "/projects/CryptoRin.png",
    tags: ["React", "TailwindCSS", "CoinGecko API"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Manage Landing Page",
    description:
      "A pixel-perfect, responsive landing page built from a Frontend Mentor challenge.",
    image: "/projects/LandingPage.png",
    tags: ["React", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Atlas Escapes",
    description:
      "A location-aware travel app for discovering and saving iconic destinations worldwide.",
    image: "/projects/PlacePicker.png",
    tags: ["React", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
];
function Project() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 ">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  src={project.image}
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.demo}
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.github}
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
