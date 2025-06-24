"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RocketIcon,
  ServerIcon,
  CodeIcon,
  CloudIcon,
  ZapIcon,
  SettingsIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white text-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 md:flex md:items-center md:justify-between">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight text-indigo-900">
            Build Fast, Scalable Apps with MERN Stack
          </h1>
          <p className="text-indigo-700 text-lg max-w-lg">
            Unlock the full power of MongoDB, Express, React, and Node.js — all in one
            seamless developer experience.
          </p>
          <button className="mt-6 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
            Get Started Now
          </button>
        </motion.div>

        {/* Right illustration */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="320"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12l2-2 4 4 8-8 3 3"></path>
            <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.2" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-indigo-900 text-center mb-16">
          Why Choose MERN Stack?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Feature
            icon={<ServerIcon className="w-10 h-10 text-indigo-600" />}
            title="MongoDB"
            description="Flexible, scalable NoSQL database built for modern applications."
          />
          <Feature
            icon={<CodeIcon className="w-10 h-10 text-indigo-600" />}
            title="Express.js"
            description="Lightweight, fast backend framework for building APIs easily."
          />
          <Feature
            icon={<RocketIcon className="w-10 h-10 text-indigo-600" />}
            title="React"
            description="Declarative UI components for building interactive web apps."
          />
          <Feature
            icon={<CloudIcon className="w-10 h-10 text-indigo-600" />}
            title="Node.js"
            description="Asynchronous JavaScript runtime for scalable server-side apps."
          />
          <Feature
            icon={<ZapIcon className="w-10 h-10 text-indigo-600" />}
            title="Tailwind CSS"
            description="Rapidly build custom user interfaces with utility-first CSS."
          />
          <Feature
            icon={<SettingsIcon className="w-10 h-10 text-indigo-600" />}
            title="DevOps Ready"
            description="Deploy with Docker, Vercel, or your favorite CI/CD tool."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-indigo-50 py-20">
        <h2 className="text-4xl font-bold text-indigo-900 text-center mb-12">
          What Developers Are Saying
        </h2>
        <div className="max-w-5xl mx-auto flex space-x-6 overflow-x-auto no-scrollbar px-6">
          <Testimonial
            name="Liam H."
            role="Backend Engineer"
            quote="MERN makes full-stack seamless. APIs and UIs connect like magic."
          />
          <Testimonial
            name="Isabella W."
            role="Product Designer"
            quote="Designing in Tailwind is as smooth as sketching—effortless and flexible."
          />
          <Testimonial
            name="Noah J."
            role="Startup Founder"
            quote="We launched in record time. MERN is rocket fuel for ideas."
          />
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="bg-indigo-700 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-extrabold max-w-3xl mx-auto mb-6">
          Ready to build your next big thing?
        </h2>
        <button className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Launch Your App Today
        </button>
      </section>
    </div>
  );
}

// Feature Component
function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}

// Testimonial Component
function Testimonial({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <motion.div
      className="min-w-[280px] max-w-xs bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <p className="text-gray-800 italic mb-4">“{quote}”</p>
      <div className="text-indigo-900 font-semibold">{name}</div>
      <div className="text-indigo-600 text-xs">{role}</div>
    </motion.div>
  );
}
