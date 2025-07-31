"use client";
import { ReactNode, useState } from "react";

interface CardGridProps {
  children: ReactNode[];
  itemsPerPage?: number;
}

export default function CardGrid({ children, itemsPerPage = 3 }: CardGridProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = children.slice(start, end);

  return (
    <div className="text-center">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {currentItems}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
