"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useUIStore } from "@/store/ui";
import { HomeView } from "@/components/movie/HomeView";
import { MoviesView } from "@/components/movie/MoviesView";
import { SearchView } from "@/components/movie/SearchView";
import { WatchlistView } from "@/components/movie/WatchlistView";

export default function Page() {
  const { activeView, searchQuery, moviesCategory } = useUIStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeView]);

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const viewVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {activeView === "home" && (
          <motion.div key="home" variants={viewVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <HomeView />
          </motion.div>
        )}
        {activeView === "movies" && (
          <motion.div key="movies" variants={viewVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <MoviesView initialCategory={moviesCategory} />
          </motion.div>
        )}
        {activeView === "search" && (
          <motion.div key="search" variants={viewVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <SearchView query={searchQuery} />
          </motion.div>
        )}
        {activeView === "watchlist" && (
          <motion.div key="watchlist" variants={viewVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <WatchlistView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-8 py-8 px-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-black text-[var(--text-primary)]">
            Cine<span className="text-[var(--accent)]">Verse</span>
          </span>
          <p className="text-[var(--text-muted)] text-xs">
            Movie data provided by{" "}
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              TMDB
            </a>
            . This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} CineVerse. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </>
  );
}
