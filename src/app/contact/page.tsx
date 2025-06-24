"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F0F2F5] flex items-center justify-center px-4 py-20">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden md:flex"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Panel */}
        <div className="md:w-1/2 bg-[#F0F2F5] p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#1C1E21] mb-4">Connect With Us</h2>
          <p className="text-[#65676B] text-sm mb-6">
            We’re available on email and phone. Drop us a message anytime!
          </p>
          <div className="text-sm space-y-4">
            <div>
              <p className="font-medium text-[#050505]">📍 Address</p>
              <p className="text-[#65676B]">789 Innovation Parkway, Silicon Valley, CA</p>
            </div>
            <div>
              <p className="font-medium text-[#050505]">📞 Phone</p>
              <a href="tel:+15551234567" className="text-[#1877F2] hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <p className="font-medium text-[#050505]">✉️ Email</p>
              <a href="mailto:support@yourcompany.com" className="text-[#1877F2] hover:underline">
                support@yourcompany.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <form className="md:w-1/2 p-8 bg-white">
          <h2 className="text-xl font-semibold text-[#1C1E21] mb-6">Send Us a Message</h2>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1C1E21] placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2] focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1C1E21] placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2] focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject (optional)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1C1E21] placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2] focus:outline-none"
            />
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#1C1E21] placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2] focus:outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#1877F2] text-white py-3 rounded-lg font-semibold hover:bg-[#165ECC] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
