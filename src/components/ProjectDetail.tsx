// components/ProjectDetail.tsx

import Image from "next/image";
import { Project } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-4">{project.description}</p>

      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl shadow"
        />
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

<div className="flex gap-4 mt-4">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl">
      <FaGithub />
    </a>
  )}
  {project.liveUrl && (
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-xl">
      <FaExternalLinkAlt />
    </a>
  )}
</div>
<div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Live Project
        </a>
      )}
      </div>
    </div>
  );
}
