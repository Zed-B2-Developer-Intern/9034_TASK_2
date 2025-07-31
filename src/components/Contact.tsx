"use client";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/dzpbd", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target as HTMLFormElement),
    });

    setLoading(false);
    if (response.ok) {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Feel free to drop a message. I’ll get back to you soon!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 text-left max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex justify-center gap-6 text-2xl text-blue-600 dark:text-blue-400 mt-8">
          <a href="ganesanpa03@gmail.com" target="_blank">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Ganesanpa/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ganesan-p-a96614298/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
