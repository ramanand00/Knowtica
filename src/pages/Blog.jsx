import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Ramanand Mandal",
    date: "2025-05-19",
    summary:
      "Learn the basics of React and how to create your first React component in minutes.",
    content: `import React from "react";

function HelloWorld() {
  return <h1>Hello, world!</h1>;
}

export default HelloWorld;`,
  },
  {
    id: 2,
    title: "Using Tailwind CSS in React",
    author: "Ramanand Mandal",
    date: "2025-05-15",
    summary:
      "A simple guide on installing and using Tailwind CSS with React projects.",
    content: `<div className="p-6 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-600">This is a card component example.</p>
</div>`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const listRef = useRef(null);
  const postRef = useRef(null);
  const backBtnRef = useRef(null);
  const copyBtnRef = useRef(null);

  // Animate blog list on mount
  useEffect(() => {
    if (!selectedPost && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [selectedPost]);

  // Animate selected post content
  useEffect(() => {
    if (selectedPost && postRef.current) {
      gsap.fromTo(
        postRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [selectedPost]);

  // Back button hover effect with GSAP
  useEffect(() => {
    const btn = backBtnRef.current;
    if (!btn) return;
    const onHover = () => gsap.to(btn, { scale: 1.1, duration: 0.3 });
    const onLeave = () => gsap.to(btn, { scale: 1, duration: 0.3 });
    btn.addEventListener("mouseenter", onHover);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mouseenter", onHover);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, [selectedPost]);

  // Copy button press animation
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    gsap.fromTo(
      copyBtnRef.current,
      { scale: 1 },
      { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
  };

  return (
    <>
      <Navbar />
      <div className="py-30 min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white px-6 py-12 w-full">
        <h1 className="text-5xl font-extrabold text-center text-[#ff6f61] mb-16 tracking-wide drop-shadow-lg">
          📝 Blog
        </h1>

        {!selectedPost && (
          <div
            ref={listRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            aria-label="Blog post list"
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="cursor-pointer rounded-2xl bg-[#121212] p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPost(post);
                }}
                role="button"
                aria-pressed="false"
              >
                <h2 className="text-3xl font-bold mb-3 text-[#61dafb] hover:underline">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-5 text-sm uppercase tracking-wide">
                  By {post.author} | {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 leading-relaxed">{post.summary}</p>
              </div>
            ))}
          </div>
        )}

        {selectedPost && (
          <article
            ref={postRef}
            className="relative bg-[#121212] p-10 rounded-3xl shadow-2xl max-w-full mx-auto max-w-4xl"
            aria-label={`Blog post: ${selectedPost.title}`}
          >
            <button
              ref={backBtnRef}
              onClick={() => setSelectedPost(null)}
              className="mb-6 inline-block text-[#ff6f61] font-semibold hover:underline focus:outline-none"
              aria-label="Back to blog list"
            >
              ← Back to Blog List
            </button>

            <h2 className="text-4xl font-bold text-[#61dafb] mb-6 tracking-wide drop-shadow-sm">
              {selectedPost.title}
            </h2>

            <p className="text-gray-400 mb-10 text-sm uppercase tracking-widest">
              By {selectedPost.author} |{" "}
              {new Date(selectedPost.date).toLocaleDateString()}
            </p>

            <div className="relative bg-[#1e1e1e] rounded-xl p-6 overflow-x-auto shadow-inner shadow-black/50">
              <pre className="font-mono text-sm whitespace-pre-wrap">
                <code>{selectedPost.content}</code>
              </pre>
              <button
                ref={copyBtnRef}
                onClick={() => handleCopy(selectedPost.content)}
                className="absolute top-4 right-4 bg-[#ff6f61] text-white px-4 py-1 rounded-md text-xs font-semibold hover:bg-[#e65b4f] transition focus:outline-none"
                aria-label="Copy code to clipboard"
              >
                Copy Code
              </button>
            </div>
          </article>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
