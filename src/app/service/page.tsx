"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Palette,
  LifeBuoy,
  Server,
  Cpu,
  Users,
  CheckCircle,
} from "lucide-react";

const servicesData = [
  {
    icon: <Code className="w-8 h-8 text-blue-700" />,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using modern technologies tailored to your business needs.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-700" />,
    title: "API Integration",
    description:
      "Seamless integration with third-party services and APIs to extend your application&apos;s functionality and efficiency.",
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-700" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and beautiful user interfaces with a focus on user experience and engagement.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-blue-700" />,
    title: "Maintenance & Support",
    description:
      "Reliable ongoing support and maintenance to keep your applications secure, performant, and up-to-date.",
  },
];

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CTO at Techify",
    feedback:
      "The MERN Stack team transformed our platform with clean code and exceptional UI. Their ongoing support is invaluable.",
  },
  {
    name: "Mark Thompson",
    role: "Founder, StartHub",
    feedback:
      "Highly recommend for startups looking for rapid development and expert guidance in the MERN ecosystem.",
  },
];

const techStack = [
  { icon: <Code className="w-7 h-7 text-indigo-600" />, name: "React" },
  { icon: <Server className="w-7 h-7 text-indigo-600" />, name: "Node.js" },
  { icon: <Cpu className="w-7 h-7 text-indigo-600" />, name: "Express" },
  { icon: <Users className="w-7 h-7 text-indigo-600" />, name: "MongoDB" },
  { icon: <CheckCircle className="w-7 h-7 text-indigo-600" />, name: "RESTful APIs" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-900 mb-16 text-center"
        >
          Our Services
        </motion.h1>

        <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {servicesData.map(({ icon, title, description }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 flex space-x-6 hover:shadow-xl transition cursor-default"
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <MoreDetails />
        <WhyChooseUs />
        <Technologies />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  );
}

function MoreDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 bg-blue-100 rounded-2xl p-10 shadow-inner max-w-4xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Tailored Solutions for Your Business
      </h3>
      <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed text-center">
        Whether you&apos;re a startup looking to build your first product or an
        established company aiming to enhance your platform, our flexible MERN
        stack expertise allows us to adapt and deliver exactly what you need.
        From rapid prototyping to production-ready deployments, we&apos;re your
        partner every step of the way.
      </p>
    </motion.section>
  );
}

function WhyChooseUs() {
  const points = [
    "Expert MERN stack developers with years of industry experience.",
    "Focus on clean, maintainable code and scalable architecture.",
    "Dedicated project management ensuring transparent communication.",
    "Post-launch support to keep your app secure and up-to-date.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 bg-white rounded-3xl p-10 shadow-lg border border-blue-100 max-w-4xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Why Choose MERN Stack?
      </h3>
      <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-xl mx-auto">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.section>
  );
}

function Technologies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 max-w-4xl mx-auto text-center"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-8">
        Technologies We Use
      </h3>
      <div className="flex flex-wrap justify-center gap-10 text-indigo-700">
        {techStack.map(({ icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 bg-white p-6 rounded-2xl shadow-md w-36"
          >
            {icon}
            <span className="font-semibold text-lg">{name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 max-w-5xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        What Our Clients Say
      </h3>
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map(({ name, role, feedback }, i) => (
          <blockquote
            key={i}
            className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 text-gray-700"
          >
            <p className="italic mb-6">&quot;{feedback}&quot;</p>
            <footer className="font-semibold text-indigo-700">
              {name},{" "}
              <span className="font-normal text-gray-500">{role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </motion.section>
  );
}

function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h3 className="text-4xl font-extrabold text-blue-900 mb-6">
        Ready to elevate your project?
      </h3>
      <p className="text-gray-700 mb-8">
        Contact our expert team today and let&apos;s turn your ideas into a
        powerful, scalable web application built with the MERN stack.
      </p>
      <a href="/contact" aria-label="Contact Us">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-400">
          Get in Touch
        </button>
      </a>
    </motion.section>
  );
}
