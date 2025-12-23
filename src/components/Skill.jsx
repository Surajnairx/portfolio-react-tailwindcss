import { useState } from "react";

const skills = [
  //frontend
  { name: "HTML/CSS", level: 60, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TailwindCSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 5, category: "frontend" },

  // backend
  { name: "Python", level: 85, category: "backend" },
  { name: "FastAPI", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "PostgreSQL / MySQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "Authentication (JWT)", level: 70, category: "backend" },

  //tools
  { name: "Git/Github", level: 70, category: "tools" },
  { name: "Vite/Webpack", level: 70, category: "tools" },
  { name: "Canva", level: 80, category: "tools" },
  { name: "VSCode", level: "95", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];
function Skill() {
  const [category, setCategory] = useState("all");
  const activeSkill = skills.filter(
    (skill) => category === "all" || skill.category === category
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((item, key) => (
            <button
              key={key}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ${
                category === item ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSkill.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="bg-stone-600 w-full h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1 text-sm">{skill.level + "%"}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
