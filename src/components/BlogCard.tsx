import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  link: string;
}

export default function BlogCard({ title, summary, link }: BlogCardProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{summary}</p>
      <Link
        href={link}
        target="_blank"
        className="text-blue-500 hover:underline text-sm font-medium"
      >
        Read more →
      </Link>
    </div>
  );
}
