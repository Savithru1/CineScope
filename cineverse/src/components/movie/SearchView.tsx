"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, AlertCircle } from "lucide-react";
import type { Movie } from "@/types";
import { MovieGridCard, MovieGridSkeleton } from "@/components/movie/MovieCard";
import { searchMovies } from "@/lib/tmdb";
import { DEMO_MOVIES } from "@/lib/demoData";

interface SearchViewProps {
  query: string;
}

export function SearchView({ query }: SearchViewProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false);

  const doSearch = useCallback(async (q: string) => {
    if (!q.trim()) return;
    setLoading(true);
    setError(false);
    try {
      const res = await searchMovies(q);
      setMovies(res.results);
    } catch {
      setError(true);
      // Fuzzy fallback from demo data
      const lower = q.toLowerCase();
      setMovies(
        DEMO_MOVIES.filter(
          (m) =>
            m.title.toLowerCase().includes(lower) ||
            m.overview.toLowerCase().includes(lower)
        )
      );
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }, []);

  useEffect(() => {
    if (query) doSearch(query);
    else {
      setMovies([]);
      setSearched(false);
    }
  }, [query, doSearch]);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Search size={26} className="text-[var(--accent)]" />
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {query ? `Results for "${query}"` : "Search"}
            </h1>
          </div>
          {searched && !loading && (
            <p className="text-[var(--text-secondary)] text-sm font-medium ml-9">
              {movies.length > 0
                ? `Found ${movies.length} matching movie${movies.length === 1 ? "" : "s"}`
                : "No movies match your search"}
            </p>
          )}
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 flex items-center gap-2.5 p-4 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm text-[var(--text-secondary)]">
            <AlertCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
            <span>API connection failed — showing demo dataset search matches.</span>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <MovieGridSkeleton count={12} />
          </div>
        )}

        {/* Results Grid */}
        {!loading && movies.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={query}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
              role="list"
              aria-label="Search results"
            >
              {movies.map((movie, i) => (
                <MovieGridCard key={movie.id} movie={movie} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty State */}
        {!loading && searched && movies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              No results found for "{query}"
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-sm">
              Check for typos or try searching with generic terms like "dark" or "dune".
            </p>
          </motion.div>
        )}

        {/* No Query State */}
        {!loading && !searched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="empty-icon-ring mb-4">
              <Search size={32} className="text-[var(--text-secondary)]" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Search CineVerse
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-sm">
              Use the search box in the navigation bar to look up your favorite movies.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
