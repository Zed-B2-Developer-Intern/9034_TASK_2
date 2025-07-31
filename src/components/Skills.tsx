"use client";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiMongodb, SiMysql,
  SiSqlite, SiPostman, SiFigma, SiGit, SiGithub
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";

function SkillCategory({ title, skills }: { title: string; skills: any[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
     <motion.div
  key={index}
  className="relative group flex flex-col items-center space-y-1 transform transition duration-300 hover:scale-110"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.05, duration: 0.4 }}
  viewport={{ once: true }}
>
  <div className="text-4xl">{skill.icon}</div>
  <span className="text-sm">{skill.name}</span>
 
</motion.div>



        ))}
      </div>
    </div>
  );
}

const frontendSkills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-500" /> },
];

const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-600" /> },
];

const toolsSkills = [
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
];

export default function Skills() {
  return (
   <motion.section
  id="skills"
  className="py-16 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>

      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <SkillCategory title="Frontend" skills={frontendSkills} />
      <SkillCategory title="Backend" skills={backendSkills} />
      <SkillCategory title="Databases" skills={databaseSkills} />
      <SkillCategory title="Tools & Others" skills={toolsSkills} />
    </motion.section>
  );
}
