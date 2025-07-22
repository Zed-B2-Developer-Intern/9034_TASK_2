// app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
