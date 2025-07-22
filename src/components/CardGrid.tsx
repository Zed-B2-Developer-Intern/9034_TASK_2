import { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {children}
    </div>
  );
}
