import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      {children}
    </section>
  );
}
