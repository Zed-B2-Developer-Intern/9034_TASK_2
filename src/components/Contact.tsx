// components/Contact.tsx

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-lg mb-6">Let's connect and build something great!</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="ganesanpa03@gmail.com"
          className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
        >
          <Mail size={20} />
          Mail
        </a>
        <a
          href="https://github.com/Ganesanpa"
          target="_blank"
          className="flex items-center gap-2 text-gray-800 hover:underline dark:text-gray-300"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ganesan-p-a96614298/"
          target="_blank"
          className="flex items-center gap-2 text-blue-700 hover:underline dark:text-blue-400"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
