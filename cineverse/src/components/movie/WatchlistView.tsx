"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookmarkX, Film } from "lucide-react";
import type { Movie } from "@/types";
import { MovieGridCard } from "@/components/movie/MovieCard";
import { useWatchlistStore } from "@/store/watchlist";
import { useUIStore } from "@/store/ui";
import { useToast } from "@/components/ui/Toaster";

export function WatchlistView() {
  const { items, remove } = useWatchlistStore();
  const { setActiveView } = useUIStore();
  const toast = useToast();

  const handleRemoveAll = () => {
    if (!confirm("Are you sure you want to clear your entire watchlist?")) return;
    items.forEach((m) => remove(m.id));
    toast("Watchlist cleared successfully", "info");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-1 tracking-tight">
              My Watchlist
            </h1>
            <p className="text-[var(--text-secondary)] text-sm font-medium">
              {items.length > 0
                ? `${items.length} movie${items.length === 1 ? "" : "s"} saved`
                : "No movies saved yet"}
            </p>
          </div>
          {items.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-500/20 hover:border-red-500/40 text-red-500 hover:bg-red-500/10 text-sm font-semibold transition-all cursor-pointer"
              aria-label="Clear watchlist"
            >
              <BookmarkX size={16} />
              Clear Watchlist
            </button>
          )}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="empty-icon-ring mb-5">
              <Film size={32} className="text-[var(--text-secondary)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Your watchlist is empty
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-sm mb-6">
              Explore CineVerse's extensive library and add movies to your list to watch them later.
            </p>
            <button
              onClick={() => setActiveView("movies")}
              className="btn-primary cursor-pointer"
              aria-label="Browse movies"
            >
              Browse Movies
            </button>
          </motion.div>
        )}

        {/* Grid */}
        {items.length > 0 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
              role="list"
              aria-label="Watchlist movies"
            >
              <AnimatePresence>
                {items.map((movie: Movie, i: number) => (
                  <motion.div
                    key={movie.id}
                    layout
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MovieGridCard movie={movie} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
