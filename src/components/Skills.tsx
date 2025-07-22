// components/Skills.tsx

const skills = [
  { name: "HTML", emoji: "🔤" },
  { name: "CSS", emoji: "🎨" },
  { name: "JavaScript", emoji: "💻" },
  { name: "TypeScript", emoji: "🔡" },
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "🚀" },
  { name: "Tailwind CSS", emoji: "🌈" },
  { name: "Git & GitHub", emoji: "🔧" },
  { name: "Node.js", emoji: "🌐" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-zinc-800 shadow text-lg font-medium"
          >
            <span className="mr-2 text-xl">{skill.emoji}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
