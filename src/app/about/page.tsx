"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <SectionIntro />
        <MissionVision />
        <TechGrid />
        <ValuesList />
        <ProcessSteps />
        <CallToAction />
      </div>
    </section>
  );
}

// Section Intro
function SectionIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-blue-100 rounded-3xl shadow-xl p-10 md:p-16 text-center mb-16"
    >
      <h2 className="text-4xl font-extrabold text-blue-900 mb-6">About MERN Stack</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        MERN Stack is a full-stack development studio focused on building performant, modern web applications.
        We specialize in the MERN stack—MongoDB, Express, React, and Node.js—empowering startups and enterprises
        to scale their digital presence efficiently and beautifully.
      </p>
    </motion.div>
  );
}

// Mission and Vision
function MissionVision() {
  const data = [
    {
      title: "Our Mission",
      desc: `To deliver modern, secure, and scalable full-stack applications that fuel innovation and accelerate growth.
             We strive to make high-quality development accessible and efficient for startups, founders, and forward-thinking businesses.`,
    },
    {
      title: "Our Vision",
      desc: `We envision a web where ideas move freely and innovation isn't bottlenecked by technology. OceanMERN is committed
             to simplifying digital product development and enabling rapid execution for bold entrepreneurs and teams.`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-8 mb-16"
    >
      {data.map(({ title, desc }, i) => (
        <div key={i} className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">{title}</h3>
          <p className="text-gray-700">{desc}</p>
        </div>
      ))}
    </motion.div>
  );
}

// Technologies Grid
function TechGrid() {
  const techs = [
    { name: "MongoDB", desc: "Flexible, scalable NoSQL database for dynamic applications." },
    { name: "Express.js", desc: "Minimal, fast backend framework on Node.js." },
    { name: "React", desc: "Component-based frontend library for interactive UIs." },
    { name: "Node.js", desc: "Event-driven JavaScript runtime for backend logic." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-16 text-center"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-8">Technologies We Trust</h3>
      <div className="grid md:grid-cols-4 gap-6 text-left">
        {techs.map(({ name, desc }, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">{name}</h4>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Core Values List
function ValuesList() {
  const values = [
    { title: "Transparency", desc: "Open communication and honest collaboration across every step." },
    { title: "Excellence", desc: "We aim for quality over quantity in everything we build." },
    { title: "Agility", desc: "Move fast. Stay flexible. Deliver value early and often." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Core Values</h3>
      <ul className="grid md:grid-cols-3 gap-6 text-left">
        {values.map(({ title, desc }, i) => (
          <li key={i} className="bg-white p-6 border border-blue-100 rounded-xl shadow">
            <h4 className="text-lg font-bold text-blue-700 mb-2">{title}</h4>
            <p className="text-gray-700 text-sm">{desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// Development Process Steps
function ProcessSteps() {
  const steps = [
    { step: "1. Discovery", desc: "We learn your vision, needs, and goals to create alignment." },
    { step: "2. Design", desc: "We wireframe and design intuitive user experiences." },
    { step: "3. Development", desc: "We build robust frontend + backend systems using MERN." },
    { step: "4. Launch & Support", desc: "We deploy, monitor, and continuously improve your app." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-24"
    >
      <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Process</h3>
      <ol className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 gap-6 text-left text-sm">
        {steps.map(({ step, desc }, i) => (
          <li key={i} className="bg-white p-6 border border-blue-100 rounded-xl shadow">
            <h4 className="text-blue-800 font-semibold mb-2">{step}</h4>
            <p className="text-gray-700">{desc}</p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

// Call to Action Button
function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-4">Let’s Build Something Great Together</h3>
      <p className="text-gray-700 mb-6">Contact us to bring your idea to life with powerful MERN stack technology.</p>
      <a href="/contact">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
          Contact Our Team
        </button>
      </a>
    </motion.div>
  );
}
