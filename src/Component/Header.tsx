"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/service",
    label: "Services",
    submenu: [
      { href: "/service/web", label: "Web Development" },
      { href: "/service/mobile", label: "Mobile Apps" },
      { href: "/service/seo", label: "SEO Optimization" },
    ],
  },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active link check (including nested)
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Keyboard navigation for desktop menu
  const handleKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    index: number,
    item: typeof navItems[0]
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
        const nextIndex = (index + 1) % navLinks.length;
        navLinks[nextIndex].focus();
        setActiveSubmenu(null);
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].focus();
        setActiveSubmenu(null);
        break;
      case "ArrowDown":
        if (item.submenu) {
          e.preventDefault();
          setActiveSubmenu(item.href);
          setTimeout(() => {
            const firstSub = navRef.current?.querySelector<HTMLAnchorElement>(
              `ul[aria-label="${item.label} submenu"] a`
            );
            firstSub?.focus();
          }, 0);
        }
        break;
      case "Escape":
        e.preventDefault();
        setActiveSubmenu(null);
        break;
    }
  };

  // Keyboard navigation inside submenu
  const handleSubmenuKeyDown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    submenu: typeof navItems[0]["submenu"],
    idx: number
  ) => {
    if (!submenu) return;
    const subLength = submenu.length;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIdx = (idx + 1) % subLength;
        const nextItem = e.currentTarget.parentElement?.parentElement?.querySelectorAll("a")[nextIdx];
        nextItem?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIdx = (idx - 1 + subLength) % subLength;
        const prevItem = e.currentTarget.parentElement?.parentElement?.querySelectorAll("a")[prevIdx];
        prevItem?.focus();
        break;
      case "Escape":
        e.preventDefault();
        setActiveSubmenu(null);
        break;
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        ref={navRef}
      >
        {/* Logo / Brand */}
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
          {navItems.map(({ href, label, submenu }, i) => {
            const active = isActiveLink(href);
            const isOpenSubmenu = activeSubmenu === href;
            return (
              <div
                key={href}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(href)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded-md cursor-pointer select-none ${
                    active
                      ? "text-indigo-700 border-b-2 border-indigo-700 dark:text-indigo-400"
                      : "text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  aria-haspopup={submenu ? "true" : undefined}
                  aria-expanded={submenu ? isOpenSubmenu : undefined}
                  onKeyDown={(e) => handleKeyDown(e, i, { href, label, submenu })}
                  tabIndex={0}
                >
                  {label}
                </Link>

                {/* Dropdown */}
                {submenu && (
                  <AnimatePresence>
                    {isOpenSubmenu && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        role="menu"
                        aria-label={`${label} submenu`}
                      >
                        {submenu.map(({ href: subHref, label: subLabel }, idx) => {
                          const activeSub = isActiveLink(subHref);
                          return (
                            <li key={subHref} role="none">
                              <Link
                                href={subHref}
                                className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                                  activeSub
                                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-200"
                                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-600 dark:hover:text-indigo-100"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                                role="menuitem"
                                tabIndex={-1}
                                onClick={() => {
                                  setActiveSubmenu(null);
                                  setIsOpen(false);
                                }}
                                onKeyDown={(e) => handleSubmenuKeyDown(e, submenu, idx)}
                              >
                                {subLabel}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveSubmenu(null);
          }}
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

      {/* Mobile Navigation Menu with animation */}
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
              {navItems.map(({ href, label, submenu }) => {
                const active = isActiveLink(href);
                const isOpenSubmenu = activeSubmenu === href;

                return (
                  <div key={href}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={href}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveSubmenu(null);
                        }}
                        className={`block text-sm font-medium transition-colors ${
                          active
                            ? "text-indigo-700"
                            : "text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400"
                        } focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded`}
                      >
                        {label}
                      </Link>

                      {/* Toggle submenu button */}
                      {submenu && (
                        <button
                          onClick={() =>
                            setActiveSubmenu(isOpenSubmenu ? null : href)
                          }
                          aria-expanded={isOpenSubmenu}
                          aria-label={`${isOpenSubmenu ? "Close" : "Open"} submenu for ${label}`}
                          className="p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform transform ${
                              isOpenSubmenu ? "rotate-180" : "rotate-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Submenu for mobile */}
                    {submenu && isOpenSubmenu && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 border-l border-gray-300 dark:border-gray-700 space-y-2"
                      >
                        {submenu.map(({ href: subHref, label: subLabel }) => {
                          const activeSub = isActiveLink(subHref);
                          return (
                            <li key={subHref}>
                              <Link
                                href={subHref}
                                onClick={() => setIsOpen(false)}
                                className={`block text-sm transition-colors rounded-md px-2 py-1 ${
                                  activeSub
                                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-200"
                                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-600 dark:hover:text-indigo-100"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                              >
                                {subLabel}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </div>
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
