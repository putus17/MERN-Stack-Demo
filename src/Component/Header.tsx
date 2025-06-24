"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (!navRef.current) return;
    const navLinks = Array.from(
      navRef.current.querySelectorAll<HTMLAnchorElement>(
        "nav.desktop-menu > div > a"
      )
    );
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        navLinks[(index + 1) % navLinks.length]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        navLinks[(index - 1 + navLinks.length) % navLinks.length]?.focus();
        break;
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        ref={navRef}
      >
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 select-none tracking-wide"
        >
          MERN<span className="text-purple-600 dark:text-purple-400">Stack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 items-center desktop-menu"
          aria-label="Primary Navigation"
        >
          {navItems.map(({ href, label }, i) => {
            const active = isActiveLink(href);
            return (
              <div key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded-md cursor-pointer select-none ${
                    active
                      ? "text-indigo-700 border-b-2 border-indigo-700 dark:text-indigo-400"
                      : "text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  tabIndex={0}
                >
                  {label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-indigo-700 dark:text-indigo-400" />
          ) : (
            <Menu className="w-7 h-7 text-indigo-700 dark:text-indigo-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            aria-label="Mobile Primary Navigation"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map(({ href, label }) => {
                const active = isActiveLink(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium transition-colors rounded ${
                      active
                        ? "text-indigo-700"
                        : "text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
