"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const postsData = [
  {
    id: 1,
    title: "Understanding the MERN Stack: A Comprehensive Guide",
    excerpt:
      "Explore the full MERN stack architecture and learn how React, Express, Node.js, and MongoDB work together to build scalable web apps.",
    date: "2025-05-10",
    slug: "mern-stack-comprehensive-guide",
    category: "MERN Stack",
    content: `...`
  },
  {
    id: 2,
    title: "How to Optimize React Performance in 2025",
    excerpt:
      "Tips and best practices for improving the performance of your React applications, including memoization, lazy loading, and more.",
    date: "2025-04-28",
    slug: "optimize-react-performance-2025",
    category: "React",
    content: `...`
  },
  {
    id: 3,
    title: "API Integration Best Practices with Node.js",
    excerpt:
      "Learn how to securely and efficiently integrate third-party APIs into your Node.js backend for enhanced functionality.",
    date: "2025-04-15",
    slug: "api-integration-best-practices-node",
    category: "Node.js",
    content: `...`
  },
  {
    id: 4,
    title: "Designing Intuitive UI/UX for Web Apps",
    excerpt:
      "Discover key principles and tips to create user-friendly interfaces that engage and retain users.",
    date: "2025-03-30",
    slug: "designing-intuitive-ui-ux",
    category: "UI/UX",
    content: `...`
  },
  {
    id: 5,
    title: "Mastering JavaScript Debugging in 2025",
    excerpt:
      "Take your JavaScript debugging skills to the next level using Chrome DevTools, breakpoints, and logging strategies.",
    date: "2025-03-10",
    slug: "mastering-js-debugging-2025",
    category: "JavaScript",
    content: `...`
  },
  {
    id: 6,
    title: "MongoDB Aggregation Pipeline Explained",
    excerpt:
      "Learn how MongoDB’s powerful aggregation pipeline works for data transformation, filtering, and analytics.",
    date: "2025-02-18",
    slug: "mongodb-aggregation-pipeline-explained",
    category: "MongoDB",
    content: `...`
  }
];

const POSTS_PER_PAGE = 3;

export default function BlogApp() {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  if (currentSlug) {
    const post = postsData.find((p) => p.slug === currentSlug);
    if (!post) return <p>Post not found.</p>;
    return <BlogPostPage post={post} onBack={() => setCurrentSlug(null)} />;
  }

  return <BlogPage onPostSelect={(slug: string) => setCurrentSlug(slug)} />;
}

function BlogPage({ onPostSelect }: { onPostSelect: (slug: string) => void }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(postsData.map((p) => p.category))];

  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  React.useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <main className="min-h-screen bg-white py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">Our Blog</h1>
        <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
          Insights, tutorials, and best practices from our MERN stack experts.
        </p>
      </motion.header>

      {/* Search and Category Filter */}
      <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-12 shadow-md">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">Find Blog Posts</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-2/3">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full border border-indigo-300 rounded-lg py-2 pl-10 pr-4 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              aria-label="Search blog posts"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
              </svg>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="w-full border border-indigo-300 rounded-lg py-2 px-4 bg-white text-indigo-900 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
              aria-label="Filter posts by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">No posts found.</p>
        ) : (
          currentPosts.map((post) => (
            <motion.article
              key={post.id}
              className="cursor-pointer rounded-lg border border-indigo-100 p-6 hover:shadow-lg transition-shadow"
              onClick={() => onPostSelect(post.slug)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onPostSelect(post.slug);
              }}
              aria-label={`Read blog post titled ${post.title}`}
            >
              <h2 className="text-2xl font-semibold text-indigo-900 mb-2">{post.title}</h2>
              <p className="text-indigo-600 text-sm font-semibold mb-2">{post.date} · {post.category}</p>
              <p className="text-indigo-700">{post.excerpt}</p>
            </motion.article>
          ))
        )}
      </section>

      {/* Pagination */}
      <nav className="flex justify-center mt-12 space-x-3" aria-label="Pagination Navigation">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded border border-indigo-400 text-indigo-600 disabled:text-gray-400 disabled:border-gray-300"
          aria-disabled={page === 1}
          aria-label="Previous page"
        >Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded border ${page === i + 1 ? "bg-indigo-600 text-white border-indigo-600" : "border-indigo-400 text-indigo-600 hover:bg-indigo-100"}`}
            aria-current={page === i + 1 ? "page" : undefined}
          >{i + 1}</button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 rounded border border-indigo-400 text-indigo-600 disabled:text-gray-400 disabled:border-gray-300"
          aria-disabled={page === totalPages}
          aria-label="Next page"
        >Next</button>
      </nav>
    </main>
  );
}

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  content: string;
};

function BlogPostPage({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-16 px-6 sm:px-12 lg:px-24">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center text-indigo-600 hover:text-indigo-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
        aria-label="Back to blog list"
      >← Back to blog</button>

      <article>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-indigo-900 mb-4"
        >{post.title}</motion.h1>

        <p className="text-indigo-600 font-semibold mb-8">{post.date} · {post.category}</p>

        <section className="prose prose-indigo max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </section>
      </article>
    </main>
  );
}
