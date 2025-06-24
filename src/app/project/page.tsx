"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management Dashboard",
    description:
      "A productivity dashboard to create, assign, and track tasks in real-time with team collaboration features.",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio website to showcase developer projects, skills, and contact information.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blog CMS",
    description:
      "A content management system with markdown support, admin authentication, and SEO-friendly routing.",
    stack: ["React", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app with private messaging, group chats, emoji support, and message notifications.",
    stack: ["Socket.io", "React", "Node.js", "Redis"],
  },
  {
    title: "Financial Dashboard",
    description:
      "An analytics dashboard displaying key financial metrics, transactions, and graphs for business monitoring.",
    stack: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 sm:px-12 lg:px-24 py-20 bg-white text-indigo-900">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Our Projects
        </h1>
        <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
          Explore our professionally built web applications showcasing a range
          of skills in modern full-stack development.
        </p>
      </motion.header>

      <section className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="border border-indigo-100 rounded-xl p-6 shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-indigo-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
