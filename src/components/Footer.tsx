

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ganesan P. All rights reserved.
      </p>
    </footer>
  );
}
